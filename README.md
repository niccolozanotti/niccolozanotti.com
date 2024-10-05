# 🌱AI4Climate.science : a Quartz-powered website

This repository is the source of my personal [website](https://niccolozanotti.com) where I hold my [Obsidian](https://obsidian.md)-taken notes. 
This work is based on the [Quartz](#the-quartz-project) project.

## Structure: 
 - the `.md` source files are located inside the `content` folder, which is set up as a [git submodule](https://github.com/niccolozanotti/AI4climate.science-vault). 
 - Static website files (HTML, CSS, JS) are built through [Quartz](https://quartz.jzhao.xyz/)
 - The website is hosted on [Cloudflare](https://www.cloudflare.com) Pages.

## Build website

### Update `content/`
To ensure consistency and avoid conflicts,
the proper way to go about modifying the content is to edit the source files in the relative
[submodule](https://github.com/niccolozanotti/AI4climate.science-vault) and then run 
```shell
git submodule update --remote --rebase
npx quartz sync --no-pull
```
which you can do simply by running the script [update-notes](update-notes.sh).
This will rebase the `content/` from upstream and sync the changes with the repo.

### Update Quartz configuration

To sync changes to the Quartz configuration options committed on your local clone of the repo,
simply run `npx quartz sync --no-pull`.
Learn more [here](https://quartz.jzhao.xyz/setting-up-your-GitHub-repository).

---

### The Quartz project
>Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
>Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

 - [Documentation](https://quartz.jzhao.xyz/)
 - [Join the Discord Community](https://discord.gg/cRFFHYye7t)

