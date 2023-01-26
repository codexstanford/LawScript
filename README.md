# LawScript

![](https://dcbadge.vercel.app/api/shield/1068230059028119593)


**LawScript** is a generic language to describe any for of law, legal document, regulation or contract in a computable form! The aim of the language are: 
- to stay as close as possible to the legal text that is represented, allowing better auditability of the code.
- ability to represent any legal document.
- trying to describe the what of the legal text, instead of the how it is to be interpreted, like in Logic Programing language.
- making it easily extensible to new legal domain

The contract can then be compile into **LawCodex** an easy to work with and interoperable format that allow representation and exchange of legals texts across computer system.

This project aim at providing a compiler for **LawScript** to **LawCodex**, and a set of tool to work with **LawCodex** files, including : 
- A visualizer of **LawCodex** files
- A solver allowing reasoning on top of **LawCodex** files
- Transpiler allowing conversion of **LawCodex** files to other language / format. We support export to Graph (Cypher) and Scasp as of today. 
