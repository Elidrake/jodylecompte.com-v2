---
title: Creating Permanent Bash Aliases in Linux
date: "2020-12-27T15:50:32.169Z"
template: "post"
slug: "/posts/create-permanent-bash-aliases/"
description: "Aliases are a convenient way to shorten commands, create multiple new commands combining smaller commands
when working with the Bash shell in linux. Let's take a look at how to create aliases."
socialImage: "/media/bash_aliases.png"
tags:
- "Linux"
- "Bash"
---

## Prerequisites
This article only assumes that you are using your favorite distribution of the Linux operating
system, and you are using Bash as your terminal of choice.

## What is an alias? 
Aliases can be thought of as a shortcut or a mask for other commands or combinations of commands.
If you are an avid terminal user and find yourself frequently using multiple commands in succession
then aliases can be a prime way to increase your efficiency by combining these under a single alias.

You can also use aliases to point new "commands" to existing commands. For example, in this tutorial we
will predominantly be looking at how I can run the Python3 command by using just 'python' since I do
not utilize Python2 and wish to use the command `python` instead of `python3.`. 

## Prepping Your .bashrc File
While you can include aliases directly into your .bashrc file, we will be taking a look at creating 
an external file to keep things organized. An organized configuration is a happy configuration.

Using your preferred editor of choice such as vim or nano, open up your `.bashrc` file. The example 
below will use nano.

```terminal
$ sudo nano ~/.bashrc
```

You now want to scan your `.bashrc` file for the following contents.

```bash
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```

This very simple bit of script basically first checks to see if the file `~/.bash_aliases` exist and if
it does, the `.` operator means to source that file. This operationally is the same as the following command:

```bash
$ source ~/.bash_aliases
```

There's a possibility by default, that your system does not have the referenced `.bash_aliases` file and you will
need to create it. The following command will take care of creating it if it does not exist, or opening
it for editing if it does exist.

```bash
$ nano ~/.bash_aliases
```

## Adding aliases
Adding aliases from this point is extremely straight forward and rather than a long textual explanation, I'll
simply show some examples.

```bash
# Alias the python3 command as python
alias python='python3'

# Shortcut for starting Apache
alias apache-start='sudo service apache2 start'

# Shortcut for starting Apache
alias apache-stop='sudo service apache2 stop'

# Shortcut for adding all unstaged changes to Git commit
alias git-commit-all=`git add . && git commit`
```

## Conclusion
Once you are finished adding any aliases you wanted to create, you can finalize the changes by running
the source command on the new `.bash_aliases` file.

```bash
$ source ~/.bash_aliases
```

Now you are one step closer to being a Bash guru and master Linux user. 