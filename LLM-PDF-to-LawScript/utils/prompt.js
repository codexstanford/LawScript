// initialise OPEN AI API
const fs = require('fs');
const { Configuration, OpenAIApi } = require("openai");
const {encode} = require('gpt-3-encoder');
const colors = require('colors/safe');

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
});

const openai = new OpenAIApi(configuration);

const openAIModelToPricePer1K = {
  'text-davinci-003' : 0.02,
  'gpt-3.5-turbo': 0.002,
  'gpt-4-32k': 0.12,
  'gpt-4' : 0.06
}

const openAIModelTokenLimit = {
  'text-davinci-003' :4096,
  'gpt-3.5-turbo': 4096,
  'gpt-4-32k': 32000,
  'gpt-4' : 8000
}

const openAIDefaultOptions = {
  model: process.env.MODEL || 'gpt-4', //'text-davinci-003',
  temperature: 0,
  stream: false
};

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

let PROMPT_COUNT = 0;

async function initialPromptIt(prompt, model=process.env.MODEL || 'gpt-4', option={})  {
  PROMPT_COUNT = 0;
  return await promptIt(prompt, model, option);
}
async function promptIt(prompt, model=process.env.MODEL || 'gpt-4', option={}) {
  PROMPT_COUNT++;
  const start = new Date().getTime();
  option.model = model;
  try {
    if (model == "gpt-3.5-turbo" || model == "gpt-4-32k" || model == "gpt-4") {
      answer =  await runMessagePrompt(prompt, model, option);
    }
    else {
      answer = await runPrompt(prompt, model, option);
    }
    const end = new Date().getTime();
  
    answer.time = end-start;
    answer.start = start;
  
  
    if (!fs.existsSync(`${__dirname}/openAI-logs`)) {
      fs.mkdirSync(`${__dirname}/openAI-logs`);
    }
    // log request for stats.
    fs.writeFileSync(`${__dirname}/openAI-logs/res-${new Date().getTime()}.json`, JSON.stringify(answer, null, 2));
  
  }
  catch (e) {   
    console.log(JSON.stringify(e, null, 2));
    console.warn('OPEN AI prompt run fail, retry in 10 seconds');
    console.warn(`Response Code: ${e}`)

    // after 3 retry kill it
    if (PROMPT_COUNT >= 3) {
      return {
        failed: true,
        initialPrompt : prompt,
        isTruncated: true,
        answer: "request failed after 3 try",
        option: option,
        cost:0
      }
    }
    await sleep(30000);
    return await promptIt(prompt, model, option);
  }
  return answer;
}

async function runMessagePrompt(prompt, model, option) {
  option = {...openAIDefaultOptions, ...option};
  if (!Array.isArray(prompt)) {
    option.messages = [{"role": "user", "content": prompt}];
  }
  else {
    option.messages = prompt;
  }
  //option.max_tokens= 4096;
  console.log( prompt);

  const gptResponse = await openai.createChatCompletion(option);
 
  return {
    answer: gptResponse.data.choices[0].message.content,
    data:  gptResponse.data,
    option: option,
    cost: ((gptResponse.data.usage.total_tokens / 1000 * openAIModelToPricePer1K[model]) * 1000 | 0) / 1000
  };
}


async function runPrompt(prompt, model, option) {

  option = {...openAIDefaultOptions, ...option};

  option.prompt = prompt;

  
  if (!option.max_tokens) {
    option.max_tokens= openAIModelTokenLimit[model] - encode(prompt).length;
  } 

  console.log( prompt.messages[0]);
  const gptResponse = await openai.createCompletion(option, {
    timeout: 9000000
  });
  console.log( colors.green(gptResponse.data.choices[0].text));
  if (gptResponse.data.choices[0].finish_reason != "stop") {
    return {
      isTruncated: true,
      answer: gptResponse.data.choices[0].text,
      data:  gptResponse.data,
      option: option,
      cost: ((gptResponse.data.usage.total_tokens / 1000 * openAIModelToPricePer1K[model]) * 1000 | 0) / 1000
    };
  }
 
  return {
    answer: gptResponse.data.choices[0].text,
    data:  gptResponse.data,
    option: option,
    cost: ((gptResponse.data.usage.total_tokens / 1000 * openAIModelToPricePer1K[model]) * 1000 | 0) / 1000
  };
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
module.exports = initialPromptIt;