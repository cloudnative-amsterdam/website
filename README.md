# Cloud Native Day Amsterdam 2019 website

[![Build Status](https://dev.azure.com/dpnl87/CloudNative%20Amsterdam/_apis/build/status/cloudnative-amsterdam.public-website?branchName=master)](https://dev.azure.com/dpnl87/CloudNative%20Amsterdam/_build/latest?definitionId=1&branchName=master)

Please join the #nl-users on Kubernetes slack (free invite on slack.k8s.io)

## Contributing

Fork and clone this repo recursively:

```
git clone --recursive https://github.com/<github user>/public-website.git
```

Work in this repo with Hugo `hugo serve`, when done:

hugo generates the assets in `./public`

```bash
#push the main repo
git push -f

#push the gh-repo branch
git push origin `git subtree split --prefix public master`:gh-pages --force
```
