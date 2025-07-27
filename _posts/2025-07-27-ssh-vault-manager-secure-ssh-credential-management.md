---
layout: post
title: "SSH Vault Manager: Because Life's Too Short for Manual SSH Passwords"
date: 2025-07-27 12:21:00 +0000
categories: [devops, security, tools]
tags: [ssh, security, bash, encryption, vault, credentials]
excerpt: "I got tired of typing SSH passwords 50 times a day, so I built a tool that actually makes terminal SSH management enjoyable."
---

Let me paint you a picture: It's 2 AM, you're troubleshooting a production issue, and you need to SSH into five different servers. Each time, you're typing:

```bash
$ ssh devops-user@prod-server-01.company.com
# Password: *types 16-character password*
# Connection failed, typo in password
$ ssh devops-user@prod-server-01.company.com
# Password: *types carefully again*
```

Sound familiar? Yeah, I've been there too. One too many times.

<!--more-->

## The Problem That Kept Me Up at Night

I spend most of my day in the terminal. It's fast, it's efficient, and honestly, it just feels right. But there was this one thing that always bugged me about SSH connections.

People using GUI tools like PuTTY or Royal TSX get to save their passwords, organize their servers, and connect with a single click. Meanwhile, I'm over here typing the same credentials over and over like it's 1995.

Don't get me wrong—SSH keys are great when you can use them. But in the real world? Sometimes you're dealing with:
- Legacy systems that only accept passwords
- Jump servers with strict authentication policies  
- Client environments where you can't install your keys
- Shared accounts that rotate passwords weekly

I needed something better. Something that felt natural in the terminal but gave me the convenience of a GUI tool.

## Enter SSH Vault Manager

So I built **SSH Vault Manager** (SVM). It's basically what would happen if PuTTY and the terminal had a baby, and that baby was really good at keeping secrets.

Here's what it does:

### Security That Actually Makes Sense
- **AES-256 encryption** for everything: no plain text passwords sitting around
- **Master password protection**: one password to rule them all
- **Automatic session timeouts**: because we all forget to lock our screens sometimes

### Organization for Real People
- **Multiple vaults**: keep your prod, staging, and dev credentials separate
- **Quick switching**: jump between environments without thinking
- **Global search**: find that one server whose name you half-remember

### Actually Pleasant to Use
- **Interactive menus**: no need to remember cryptic commands
- **One-command connections**: seriously, just pick a server and go
- **Import/export**: share configurations with your team (passwords stay encrypted)

## How It Actually Works

Let me show you what a typical workflow looks like:

### Installation (The Easy Part)

```bash
# Clone and install
$ git clone https://github.com/ahmadarafaa/ssh-vault-manager.git
$ cd ssh-vault-manager
$ ./install.sh
```

The installer sets everything up and adds `svm` to your PATH. No complex configuration files, no dependencies to wrestle with.

### First Run (Setting Up Your Vault)

```bash
$ svm
```

First time? It'll walk you through creating a master password and your first vault. I recommend starting with something like "production" or "work" depending on what you're managing.

### Adding Your First Server

The interactive menu makes this painless:

1. Choose "Server Management"
2. Pick "Add Server" 
3. Enter your details (hostname, username, port if needed)
4. Enter the password once—SVM encrypts and stores it

That's it. You'll never type that password again.

### Connecting (The Magic Moment)

```bash
$ svm
# Choose "Connect to Server"
# Pick your server from the list
# *connects immediately*
```

No typing. No remembering. Just connection.

## Real-World Usage Examples

Here's how I use SVM in my daily work:

**Morning routine:** Need to check logs across three production servers?
```bash
$ svm
# Connect to prod-web-01
# Do my thing, exit
$ svm  
# Connect to prod-db-01
# Check database status, exit
$ svm
# Connect to prod-api-01
# Review API logs, done
```

**Client work:** Switching between different client environments?
```bash
$ svm
# Switch to "client-a" vault
# Connect to their staging server
# Test deployment, switch back to my main vault
```

**Emergency response:** Production is down, need to check multiple servers fast?
```bash
$ svm
# Global search for "prod"
# Shows all production servers across all vaults
# Connect to each one quickly without password drama
```

## The Technical Bits (For the Curious)

SVM is built in Bash because:
1. **Universal compatibility**—works on any Unix-like system
2. **No runtime dependencies**—if you have Bash, you can run it
3. **Easy to audit**—the entire codebase is readable shell script
4. **Simple deployment**—no compilation, no package management headaches

For encryption, I use OpenSSL with AES-256-CBC. The encrypted vault files are portable—you can sync them across machines or back them up however you want.

## Why I'm Sharing This

Honestly? Because I think other terminal users deserve better than manually typing SSH passwords all day. 

I've been using SVM for months now, and it's genuinely changed how I work. No more password fatigue, no more typos causing connection failures, no more "wait, what was the IP for that staging server again?"

It's one of those tools that solves a small but persistent annoyance, and those tend to have the biggest impact on day-to-day productivity.

## Try It Out

The project is open source and available on GitHub: **[ssh-vault-manager](https://github.com/ahmadarafaa/ssh-vault-manager)**

If you're skeptical, I get it. But give it a try for a week. I think you'll find yourself wondering how you managed SSH connections before.

Found a bug? Have an idea for improvement? Issues and pull requests are welcome. This tool works for me, but I'd love to make it work better for everyone.

---

*P.S. - Yes, I know SSH keys are the "proper" way to do authentication. But sometimes the real world has other plans, and we need tools that work with reality, not just best practices.*
