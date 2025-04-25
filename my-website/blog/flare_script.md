---
title: "Automating tasks in MadCap Flare - Python script    "
slug: "python-script-madcap-flare"
date: 2025-03-21
tags: [automation, work]
---

In 2025. I've decided to learn more about automation. After initially buying several books about Python, so much actually that my daughter started recognizing them as "the ones with the robot", and going through several online tutorials it was the time to actually automate something meaningful.

Technical writers in our organization use MadCap Flare for writing and managing documentation. An industry standard documentation tool, very robust and with its flaws. One of the major issues I have with Flare is constantly switching between multiple projects (and of course crashing from time to time but at this point it's become expected). For the documentation release, we publish updated documents every other week. The product documentation is split between 5 different projects, each containing variables and conditional text.

The conditional tags help us manage questions for SMEs, internal comments, and any other text that might be only for internal use. Before every release it is important to set them properly - hide questions and comments. You can go through every project and inspect targets to see the status of the conditional tag.

Or, you can ask Copilot for help and create a Python script that handles that for you, and provides a neat report. Still relying heavily on AI solutions for coding, I asked Copilot extension in Edge to do the following: "Create a report that will go through my madcap flare targets and create a report of the current status of conditional tag".

The first response was rough... I failed to specify where to look, and what to look for. After several iterations I ended up with the following Python script:

``` python script goes here```

I updated it to create a .csv report, with specific columns, and to include time and date in the file name. Now before confirming that the documentation is ready for the release, we run this script to confirm that clients won't see our internal comments and questions.

## What's next

While this almost falls under the category "spent 2 hours to automate a 5 minute task" it opens so much options for automation. The next automated task that I would like to include is actually switching the status of the conditional tag (from include to exclude) using a script. And try not to rely so much on my friend Copilot.