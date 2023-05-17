# Template Repository
[https://kyaulabs.com/](https://kyaulabs.com/)

[![Contributor Covenant](https://img.shields.io/badge/contributor%20covenant-2.1-4baaaa.svg?logo=open-source-initiative&logoColor=4baaaa)](CODE_OF_CONDUCT.md) &nbsp; [![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-fe5196?style=flat&logo=conventionalcommits)](https://www.conventionalcommits.org/en/v1.0.0/) &nbsp; [![GitHub](https://img.shields.io/github/license/kyaulabs/template?logo=creativecommons)](LICENSE) &nbsp; [![Gitleaks](https://img.shields.io/badge/protected%20by-gitleaks-blue?logo=git&logoColor=seagreen&color=seagreen)](https://github.com/zricethezav/gitleaks)  
[![Semantic Versioning](https://img.shields.io/github/v/release/kyaulabs/template?include_prereleases&logo=semver&sort=semver)](https://semver.org) &nbsp; [![Discord](https://img.shields.io/discord/88713030895943680?logo=discord&color=blue&logoColor=white)](https://discord.gg/DSvUNYm)

# Disclaimer

* [About](#about)
* [Usage](#Usage)
  * [GitHub Actions](#github-actions)
  * [Unity Activation](#unity-activation)
* [Changelog](#changelog)
* [Attribution](#attribution)

# About

This repository is the basis for all other repositories created here at KYAU Labs.

# Usage

Initialize a new clone repository.
```bash
git clone https://github.com/kyaulabs/template <REPO>
cd <REPO>
rm -rf .git
git init
```

Add in a `LICENSE` of choice and the associated `.gitignore` from [github/gitignore](https://github.com/github/gitignore) (modification required).

Install `commitlint` and `git-cliff` globally if they are not already installed.

```bash
npm i -g @commitlint/config-conventional @commitlint/cli git-cliff
```

Copy or symlink to the hooks located inside of `.github/hooks`.

```bash
chmod +x .github/hook/*
cp .github/hooks/* .git/hooks/
```

Add all files to the repository (dry-run first).

```bash
git add -A -n
git add -A
```

Push the initial commit with in the `ignore` type (for git-cliff) and with a non-commitlint verified message (no active rules for intial commit messages).

```bash
git commit -S -a -m "ignore: here be dragons" --no-verify
```

Finally set the main branch name.

```bash
git branch -M develop
```

Add the remote origin and push the branch to origin.

```bash
git remote add origin git@github.com:kyaulabs/<REPO>.git
git push -u origin develop
```

## GitHub Actions

Make sure you add any [kyaulabs/template-workflows](https://github.com/kyaulabs/template-workflows) that are required.

Edit the workflow accordingly as all workflows come with only manual activation set with automatic activation commented out.

```yaml
on:
  workflow_dispatch: {}
#on:
#  push:
#    branches: [ "release/**" ]
#  workflow_dispatch:
```

## Unity Activation

Visit the repository page and navigate to `Actions`. Manually run the `Unity Activation` action and then download the artifact.

Extract the zip file somewhere accessible.

Visit [license.unity3d.com](https://license.unity3d.com/manual) and upload the `Unity_v20XX.X.XXXX.alf` file, receiving a license file `Unity_v20XX.X.ulf` in return.

Navigate on Github to `Settings > Secrets and variables > Actions`.

Create the following repository secrets:
* `UNITY_LICENSE` - (Copy the contents of your license file into here)
* `UNITY_EMAIL` - (Add the email address that you use to login to Unity)
* `UNITY_PASSWORD` - (Add the password that you use to login to Unity)

# Changelog

Once you have published at least one proper commit using conventional commits syntax you will be able to generate a changelog.

```bash
git cliff --tag 0.0.1
```

After the initial run of git-cliff all subsequent runs should detect the version automatically.

```bash
git cliff
```

# Attribution
* [GiHub Emoji Picker](https://github-emoji-picker.vercel.app/)
* [Commitlint](https://github.com/conventional-changelog/commitlint)
* [git-cliff](https://github.com/orhun/git-cliff)