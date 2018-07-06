





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-pCRDtdb3GlUU48h+oRJVA8f0GddrLnU97wB7mHQ7q6c40vMbMMZsFdk0IMhkUFRqw1M/y4EkWxtaKwfeFezOkQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-73f533b7cc08a9d040e601cfd38fa585.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-vrwS5GTHMe5QCbchwVAbyBqqNwlVDlcR7PTfMj5z8yAGjYkQff5d7XSBHLA9pnFIjdpUpBzQT9tPJx3yr1J+Kw==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-9a677e0691bf4da675df30a05643e1e4.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-1Q2L3mMZmUTERt299izQNP+0f6Jdb17SoRm/kKESblBKU4mRZHembOETNbqWfJqrr+UvzmU6Mt6iJ6VvP4oJ2g==" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-4139b251192ad0112098c9811ce21d37.css" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>ink/WritingWithInk.md at master · inkle/ink · GitHub</title>
    <meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/1987090?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="inkle/ink" /><meta property="og:url" content="https://github.com/inkle/ink" /><meta property="og:description" content="inkle&#39;s open source scripting language for writing interactive narrative." />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="1EC1:1A3E:6628711:B9A1C36:5B3FB93C" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="1EC1:1A3E:6628711:B9A1C36:5B3FB93C" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




<meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="Y2QzMWEzYjBkMzBlNGRjOGNjYTYzNzUzNjM1ZDc4NWJiYzNhODk1NTI5MzFiZTAyNDE1YmE0Njk5ZTNkNGE1Znx7InJlbW90ZV9hZGRyZXNzIjoiNDYuMjQyLjguNTEiLCJyZXF1ZXN0X2lkIjoiMUVDMToxQTNFOjY2Mjg3MTE6QjlBMUMzNjo1QjNGQjkzQyIsInRpbWVzdGFtcCI6MTUzMDkwMjg0NSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_SEARCH,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="94a68dd5d69b3b7bd8a7bd6a1af911c88261387d">

  <meta http-equiv="x-pjax-version" content="3c60f0c27c577a798b3e1b15a54305c9">
  

      <link href="https://github.com/inkle/ink/commits/master.atom" rel="alternate" title="Recent Commits to ink:master" type="application/atom+xml">

  <meta name="description" content="inkle&#39;s open source scripting language for writing interactive narrative.">
  <meta name="go-import" content="github.com/inkle/ink git https://github.com/inkle/ink.git">

  <meta name="octolytics-dimension-user_id" content="1987090" /><meta name="octolytics-dimension-user_login" content="inkle" /><meta name="octolytics-dimension-repository_id" content="50244673" /><meta name="octolytics-dimension-repository_nwo" content="inkle/ink" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="50244673" /><meta name="octolytics-dimension-repository_network_root_nwo" content="inkle/ink" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    <div class="unsupported-browser">
  <div class="container clearfix">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/site/dismiss_unsupported_browser" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="oWCJ3y7H3CFwTblUYyHrRC2xgwe6+WOasSbv5GdVhNEXq8butXE5VhYDEUleF58qeoLvW0vdMILJbgGwMjxHYA==" />
      <button type="submit" class="btn btn-danger">Ignore</button>
</form>    <a href="https://help.github.com/articles/supported-browsers" class="btn">Learn more</a>

      <h5>Please note that GitHub no longer supports Internet Explorer.</h5>
      <p>We recommend upgrading to the latest <a href="https://www.microsoft.com/en-us/windows/microsoft-edge">Microsoft Edge</a>, <a href="https://chrome.google.com">Google Chrome</a>, or <a href="https://mozilla.org/firefox/">Firefox</a>.</p>
  </div>
</div>




        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features" href="/features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business" href="/business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace" href="/marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-cloud /pricing/enterprise /pricing" href="/pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="search combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="true"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="50244673" data-scoped-search-url="/inkle/ink/search" data-unscoped-search-url="/search" action="/inkle/ink/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=kZeD8mX7U9J7fuwzDiQffGqqMiIRLjSMGS/i69RCLe6BM2OtaQDEb4M6/xEuNOtnxuUTuWZqzspea8MAwzRZ/w=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon mr-2 text-center d-none"></div>
                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
                <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-repo-octicon-template" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-project-octicon-template" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-search-octicon-template" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Finkle%2Fink%2Fblob%2Fmaster%2FDocumentation%2FWritingWithInk.md" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      





  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Finkle%2Fink"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/inkle/ink/watchers"
     aria-label="105 users are watching this repository">
    105
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Finkle%2Fink"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/inkle/ink/stargazers"
      aria-label="1449 users starred this repository">
      1,449
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Finkle%2Fink"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/inkle/ink/network" class="social-count"
       aria-label="161 users forked this repository">
      161
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/inkle">inkle</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/inkle/ink">ink</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /inkle/ink" href="/inkle/ink">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /inkle/ink/issues" href="/inkle/ink/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">166</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /inkle/ink/pulls" href="/inkle/ink/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">4</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /inkle/ink/projects" href="/inkle/ink/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /inkle/ink/wiki" href="/inkle/ink/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /inkle/ink/pulse" href="/inkle/ink/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/inkle/ink/blob/8026e604ae68ead46ace4c9dee80d58be190109a/Documentation/WritingWithInk.md">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:56b2cde72d7c7c8c4a62df646185efb9 -->

      <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/site/dismiss_signup_prompt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Wvd/GzcpiTXSbxuBiPDhXWUHxqXNW4GdSOKm45dwXG+yNJm55HmWeAxKh+8QsBPwxRrXm7qaPG5bhAcSwlhNoQ==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 28 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" href="/join?source=prompt-blob-show" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up">Sign up</a>
        </div>
      </div>
    </div>


  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/compiler-seperate-assembly/Documentation/WritingWithInk.md"
               data-name="compiler-seperate-assembly"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                compiler-seperate-assembly
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/development/Documentation/WritingWithInk.md"
               data-name="development"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                development
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/disallow-cross-stitch-temps/Documentation/WritingWithInk.md"
               data-name="disallow-cross-stitch-temps"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                disallow-cross-stitch-temps
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/experimental-story-pointer/Documentation/WritingWithInk.md"
               data-name="experimental-story-pointer"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                experimental-story-pointer
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/experimental-whitespace-chomping/Documentation/WritingWithInk.md"
               data-name="experimental-whitespace-chomping"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                experimental-whitespace-chomping
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/fix-for-loss-of-original-callstack/Documentation/WritingWithInk.md"
               data-name="fix-for-loss-of-original-callstack"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-for-loss-of-original-callstack
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/inkc/Documentation/WritingWithInk.md"
               data-name="inkc"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                inkc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/inky-tweaks/Documentation/WritingWithInk.md"
               data-name="inky-tweaks"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                inky-tweaks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/lists/Documentation/WritingWithInk.md"
               data-name="lists"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                lists
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/inkle/ink/blob/master/Documentation/WritingWithInk.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/simple-json/Documentation/WritingWithInk.md"
               data-name="simple-json"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                simple-json
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/story-changes-recovery/Documentation/WritingWithInk.md"
               data-name="story-changes-recovery"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                story-changes-recovery
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/inkle/ink/blob/tags/Documentation/WritingWithInk.md"
               data-name="tags"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                tags
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/v0.2.3-alpha/Documentation/WritingWithInk.md"
              data-name="v0.2.3-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.3-alpha">
                v0.2.3-alpha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/v0.2.2-alpha/Documentation/WritingWithInk.md"
              data-name="v0.2.2-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2-alpha">
                v0.2.2-alpha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/v0.2.1-alpha/Documentation/WritingWithInk.md"
              data-name="v0.2.1-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1-alpha">
                v0.2.1-alpha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/v0.2.0-alpha/Documentation/WritingWithInk.md"
              data-name="v0.2.0-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0-alpha">
                v0.2.0-alpha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/v0.1.3-alpha/Documentation/WritingWithInk.md"
              data-name="v0.1.3-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.3-alpha">
                v0.1.3-alpha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/v0.1.2-alpha/Documentation/WritingWithInk.md"
              data-name="v0.1.2-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.2-alpha">
                v0.1.2-alpha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/v0.1.1-alpha/Documentation/WritingWithInk.md"
              data-name="v0.1.1-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1-alpha">
                v0.1.1-alpha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/v0.1.0-alpha/Documentation/WritingWithInk.md"
              data-name="v0.1.0-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0-alpha">
                v0.1.0-alpha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/inkjs-compat/Documentation/WritingWithInk.md"
              data-name="inkjs-compat"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="inkjs-compat">
                inkjs-compat
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.8.1/Documentation/WritingWithInk.md"
              data-name="0.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.1">
                0.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.8.0/Documentation/WritingWithInk.md"
              data-name="0.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.0">
                0.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.7.5/Documentation/WritingWithInk.md"
              data-name="0.7.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.5">
                0.7.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.7.4/Documentation/WritingWithInk.md"
              data-name="0.7.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.4">
                0.7.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.7.3/Documentation/WritingWithInk.md"
              data-name="0.7.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.3">
                0.7.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.7.2/Documentation/WritingWithInk.md"
              data-name="0.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.2">
                0.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.7.1/Documentation/WritingWithInk.md"
              data-name="0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.1">
                0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.7.0/Documentation/WritingWithInk.md"
              data-name="0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.0">
                0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.6.4/Documentation/WritingWithInk.md"
              data-name="0.6.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.4">
                0.6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.6.3/Documentation/WritingWithInk.md"
              data-name="0.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.3">
                0.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.6.2/Documentation/WritingWithInk.md"
              data-name="0.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.2">
                0.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.6.1/Documentation/WritingWithInk.md"
              data-name="0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.1">
                0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.6.0/Documentation/WritingWithInk.md"
              data-name="0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.0">
                0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.5.1/Documentation/WritingWithInk.md"
              data-name="0.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.1">
                0.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.5/Documentation/WritingWithInk.md"
              data-name="0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5">
                0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.4.1/Documentation/WritingWithInk.md"
              data-name="0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.1">
                0.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.4.0/Documentation/WritingWithInk.md"
              data-name="0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.0">
                0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.4/Documentation/WritingWithInk.md"
              data-name="0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4">
                0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.3.6/Documentation/WritingWithInk.md"
              data-name="0.3.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.6">
                0.3.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.3.5/Documentation/WritingWithInk.md"
              data-name="0.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.5">
                0.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.3.4/Documentation/WritingWithInk.md"
              data-name="0.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.4">
                0.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/inkle/ink/tree/0.3.3/Documentation/WritingWithInk.md"
              data-name="0.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.3">
                0.3.3
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/inkle/ink/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/inkle/ink"><span>ink</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/inkle/ink/tree/master/Documentation"><span>Documentation</span></a></span><span class="separator">/</span><strong class="final-path">WritingWithInk.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/inkle/ink/commit/40301e1d119f2b20a7ba246528c05334f45bb1a0" data-pjax>
          40301e1
        </a>
        <relative-time datetime="2018-05-02T11:15:18Z">May 2, 2018</relative-time>
      </span>
      <div>
        <a rel="contributor" data-skip-pjax="true" data-hovercard-user-id="930979" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joningold"><img class="avatar" src="https://avatars3.githubusercontent.com/u/930979?s=40&amp;v=4" width="20" height="20" alt="@joningold" /></a>
        <a class="user-mention" rel="contributor" data-hovercard-user-id="930979" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joningold">joningold</a>
          <a data-pjax="true" title="Documented string handling

Including the substring operator" class="message" href="/inkle/ink/commit/40301e1d119f2b20a7ba246528c05334f45bb1a0">Documented string handling</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>13</strong>
         contributors
      </button>
          <a class="avatar-link" data-hovercard-user-id="858967" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=joethephish">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/858967?s=40&amp;v=4" width="20" height="20" alt="@joethephish" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="1716141" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=ivaylo5ev">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/1716141?s=40&amp;v=4" width="20" height="20" alt="@ivaylo5ev" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="3679327" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=micabytes">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/3679327?s=40&amp;v=4" width="20" height="20" alt="@micabytes" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="930979" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=joningold">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/930979?s=40&amp;v=4" width="20" height="20" alt="@joningold" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="2823857" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=StStep">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/2823857?s=40&amp;v=4" width="20" height="20" alt="@StStep" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="7707250" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=TheIronBorn">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/7707250?s=40&amp;v=4" width="20" height="20" alt="@TheIronBorn" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="377379" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=behindcurtain3">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/377379?s=40&amp;v=4" width="20" height="20" alt="@behindcurtain3" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="1862983" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=chrmitchell">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/1862983?s=40&amp;v=4" width="20" height="20" alt="@chrmitchell" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="22177" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=octplane">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/22177?s=40&amp;v=4" width="20" height="20" alt="@octplane" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="137438" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=Kalus">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/137438?s=40&amp;v=4" width="20" height="20" alt="@Kalus" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="900717" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=joaobsneto">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/900717?s=40&amp;v=4" width="20" height="20" alt="@joaobsneto" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="1545299" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=Horatio-Blackwood">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/1545299?s=40&amp;v=4" width="20" height="20" alt="@Horatio-Blackwood" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="351085" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md?author=chromy">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/351085?s=40&amp;v=4" width="20" height="20" alt="@chromy" /> 
</a>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="858967" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joethephish"><img src="https://avatars2.githubusercontent.com/u/858967?s=48&amp;v=4" width="24" height="24" alt="@joethephish" /></a>
            <a data-hovercard-user-id="858967" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joethephish">joethephish</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1716141" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ivaylo5ev"><img src="https://avatars2.githubusercontent.com/u/1716141?s=48&amp;v=4" width="24" height="24" alt="@ivaylo5ev" /></a>
            <a data-hovercard-user-id="1716141" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ivaylo5ev">ivaylo5ev</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="3679327" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/micabytes"><img src="https://avatars1.githubusercontent.com/u/3679327?s=48&amp;v=4" width="24" height="24" alt="@micabytes" /></a>
            <a data-hovercard-user-id="3679327" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/micabytes">micabytes</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="930979" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joningold"><img src="https://avatars2.githubusercontent.com/u/930979?s=48&amp;v=4" width="24" height="24" alt="@joningold" /></a>
            <a data-hovercard-user-id="930979" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joningold">joningold</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2823857" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/StStep"><img src="https://avatars3.githubusercontent.com/u/2823857?s=48&amp;v=4" width="24" height="24" alt="@StStep" /></a>
            <a data-hovercard-user-id="2823857" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/StStep">StStep</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="7707250" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/TheIronBorn"><img src="https://avatars3.githubusercontent.com/u/7707250?s=48&amp;v=4" width="24" height="24" alt="@TheIronBorn" /></a>
            <a data-hovercard-user-id="7707250" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/TheIronBorn">TheIronBorn</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="377379" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/behindcurtain3"><img src="https://avatars2.githubusercontent.com/u/377379?s=48&amp;v=4" width="24" height="24" alt="@behindcurtain3" /></a>
            <a data-hovercard-user-id="377379" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/behindcurtain3">behindcurtain3</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1862983" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/chrmitchell"><img src="https://avatars1.githubusercontent.com/u/1862983?s=48&amp;v=4" width="24" height="24" alt="@chrmitchell" /></a>
            <a data-hovercard-user-id="1862983" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/chrmitchell">chrmitchell</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="22177" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/octplane"><img src="https://avatars3.githubusercontent.com/u/22177?s=48&amp;v=4" width="24" height="24" alt="@octplane" /></a>
            <a data-hovercard-user-id="22177" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/octplane">octplane</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="137438" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Kalus"><img src="https://avatars3.githubusercontent.com/u/137438?s=48&amp;v=4" width="24" height="24" alt="@Kalus" /></a>
            <a data-hovercard-user-id="137438" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Kalus">Kalus</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="900717" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joaobsneto"><img src="https://avatars3.githubusercontent.com/u/900717?s=48&amp;v=4" width="24" height="24" alt="@joaobsneto" /></a>
            <a data-hovercard-user-id="900717" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joaobsneto">joaobsneto</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1545299" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Horatio-Blackwood"><img src="https://avatars3.githubusercontent.com/u/1545299?s=48&amp;v=4" width="24" height="24" alt="@Horatio-Blackwood" /></a>
            <a data-hovercard-user-id="1545299" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Horatio-Blackwood">Horatio-Blackwood</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="351085" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/chromy"><img src="https://avatars2.githubusercontent.com/u/351085?s=48&amp;v=4" width="24" height="24" alt="@chromy" /></a>
            <a data-hovercard-user-id="351085" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/chromy">chromy</a>
          </li>
      </ul>
    </div>
  </div>



  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/inkle/ink/raw/master/Documentation/WritingWithInk.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/inkle/ink/blame/master/Documentation/WritingWithInk.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/inkle/ink/commits/master/Documentation/WritingWithInk.md">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      3193 lines (2083 sloc)
      <span class="file-info-divider"></span>
    111 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-writing-with-ink" class="anchor" aria-hidden="true" href="#writing-with-ink"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing with ink</h1>
<h2><a id="user-content-introduction" class="anchor" aria-hidden="true" href="#introduction"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>
<p><strong>ink</strong> is a scripting language built around the idea of marking up pure-text with flow in order to produce interactive scripts.</p>
<p>At its most basic, it can be used to write a Choose Your Own-style story, or a branching dialogue tree. But its real strength is in writing dialogues with lots of options and lots of recombination of the flow.</p>
<p><strong>ink</strong> offers several features to enable non-technical writers to branch often, and play out the consequences of those branches, in both minor and major ways, without fuss.</p>
<p>The script aims to be clean and logically ordered, so branching dialogue can be tested "by eye". The flow is described in a declarative fashion where possible.</p>
<p>It's also designed with redrafting in mind; so editing a flow should be fast.</p>
<h1><a id="user-content-part-one-the-basics" class="anchor" aria-hidden="true" href="#part-one-the-basics"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Part One: The Basics</h1>
<h2><a id="user-content-1-content" class="anchor" aria-hidden="true" href="#1-content"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1) Content</h2>
<h3><a id="user-content-the-simplest-ink-script" class="anchor" aria-hidden="true" href="#the-simplest-ink-script"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The simplest ink script</h3>
<p>The most basic ink script is just text in a .ink file.</p>
<pre><code>Hello, world!
</code></pre>
<p>On running, this will output the content, and then stop.</p>
<p>Text on separate lines produces new paragraphs. The script:</p>
<pre><code>Hello, world!
Hello?
Hello, are you there?
</code></pre>
<p>produces output that looks the same.</p>
<h3><a id="user-content-comments" class="anchor" aria-hidden="true" href="#comments"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comments</h3>
<p>By default, all text in your file will appear in the output content, unless specially marked up.</p>
<p>The simplest mark-up is a comment. <strong>ink</strong> supports two kinds of comment. There's the kind used for someone reading the code, which the compiler ignores:</p>
<pre><code>"What do you make of this?" she asked. 

// Something unprintable...

"I couldn't possibly comment," I replied.

/*
	... or an unlimited block of text
*/
</code></pre>
<p>and there's the kind used for reminding the author what they need to do, that the compiler prints out during compilation:</p>
<pre><code>TODO: Write this section properly!
</code></pre>
<h3><a id="user-content-tags" class="anchor" aria-hidden="true" href="#tags"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tags</h3>
<p>Text content from the game will appear 'as is' when the engine runs. However, it can sometimes be useful to mark up a line of content with extra information to tell the game what to do with that content.</p>
<p><strong>ink</strong> provides a simple system for tagging lines of content, with hashtags.</p>
<pre><code>=== content 
	A line of normal game-text. # colour it blue
</code></pre>
<p>These don't show up in the main text flow, but can be read off by the game and used as you see fit. See <a href="https://github.com/inkle/ink/blob/master/Documentation/RunningYourInk.md#marking-up-your-ink-content-with-tags">RunningYourInk</a> for more information.</p>
<h2><a id="user-content-2-choices" class="anchor" aria-hidden="true" href="#2-choices"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2) Choices</h2>
<p>Input is offered to the player via text choices. A text choice is indicated by an <code>*</code> character.</p>
<p>If no other flow instructions are given, once made, the choice will flow into the next line of text.</p>
<pre><code>Hello world!
*	Hello back!
	Nice to hear from you!
</code></pre>
<p>This produces the following game:</p>
<pre><code>Hello world 
1: Hello back! 

&gt; 1
Hello back!
Nice to hear from you.	
</code></pre>
<p>By default, the text of a choice appears again, in the output.</p>
<h3><a id="user-content-suppressing-choice-text" class="anchor" aria-hidden="true" href="#suppressing-choice-text"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Suppressing choice text</h3>
<p>Some games separate the text of a choice from its outcome. In <strong>ink</strong>, if the choice text is given in square brackets, the text of the choice will not be printed into response.</p>
<pre><code>Hello world!
*	[Hello back!]
	Nice to hear from you!
</code></pre>
<p>produces</p>
<pre><code>Hello world 
1: Hello back! 

&gt; 1
Nice to hear from you.	
</code></pre>
<h4><a id="user-content-advanced-mixing-choice-and-output-text" class="anchor" aria-hidden="true" href="#advanced-mixing-choice-and-output-text"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: mixing choice and output text</h4>
<p>The square brackets in fact divide up the option content. What's before is printed in both choice and output; what's inside only in choice; and what's after, only in output. Effectively, they provide alternative ways for a line to end.</p>
<pre><code>Hello world!
*	Hello [back!] right back to you!
	Nice to hear from you!
</code></pre>
<p>produces:</p>
<pre><code>Hello world 
1: Hello back!
&gt; 1
Hello right back to you!
Nice to hear from you.	
</code></pre>
<p>This is most useful when writing dialogue choices:</p>
<pre><code>"What's that?" my master asked.
*	"I am somewhat tired[."]," I repeated.
	"Really," he responded. "How deleterious."
</code></pre>
<p>produces:</p>
<pre><code>"What's that?" my master asked.
1. "I am somewhat tired."
&gt; 1
"I am somewhat tired," I repeated.
"Really," he responded. "How deleterious."
</code></pre>
<h3><a id="user-content-multiple-choices" class="anchor" aria-hidden="true" href="#multiple-choices"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Multiple Choices</h3>
<p>To make choices really choices, we need to provide alternatives. We can do this simply by listing them:</p>
<pre><code>"What's that?" my master asked.
*	"I am somewhat tired[."]," I repeated.
	"Really," he responded. "How deleterious."
*	"Nothing, Monsieur!"[] I replied.
	"Very good, then."
*  "I said, this journey is appalling[."] and I want no more of it."
	"Ah," he replied, not unkindly. "I see you are feeling frustrated. Tomorrow, things will improve."
</code></pre>
<p>This produces the following game:</p>
<pre><code>"What's that?" my master asked.

1: "I am somewhat tired."
2: "Nothing, Monsieur!"
3: "I said, this journey is appalling."

&gt; 3
"I said, this journey is appalling and I want no more of it."
"Ah," he replied, not unkindly. "I see you are feeling frustrated. Tomorrow, things will improve."
</code></pre>
<p>The above syntax is enough to write a single set of choices. In a real game, we'll want to move the flow from one point to another based on what the player chooses. To do that, we need to introduce a bit more structure.</p>
<h2><a id="user-content-3-knots" class="anchor" aria-hidden="true" href="#3-knots"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3) Knots</h2>
<h3><a id="user-content-pieces-of-content-are-called-knots" class="anchor" aria-hidden="true" href="#pieces-of-content-are-called-knots"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pieces of content are called knots</h3>
<p>To allow the game to branch we need to mark up sections of content with names (as an old-fashioned gamebook does with its 'Paragraph 18', and the like.)</p>
<p>These sections are called "knots" and they're the fundamental structural unit of ink content.</p>
<h3><a id="user-content-writing-a-knot" class="anchor" aria-hidden="true" href="#writing-a-knot"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing a knot</h3>
<p>The start of a knot is indicated by two or more equals signs, as follows.</p>
<pre><code>=== top_knot ===
</code></pre>
<p>(The equals signs on the end are optional; and the name needs to be a single word with no spaces.)</p>
<p>The start of a knot is a header; the content that follows will be inside that knot.</p>
<pre><code>=== back_in_london ===

We arrived into London at 9.45pm exactly.
</code></pre>
<h4><a id="user-content-advanced-a-knottier-hello-world" class="anchor" aria-hidden="true" href="#advanced-a-knottier-hello-world"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: a knottier "hello world"</h4>
<p>When you start an ink file, content outside of knots will be run automatically. But knots won't. So if you start using knots to hold your content, you'll need to tell the game where to go. We do this with a divert arrow <code>-&gt;</code>, which is covered properly in the next section.</p>
<p>The simplest knotty script is:</p>
<pre><code>-&gt; top_knot

=== top_knot ===
Hello world!
</code></pre>
<p>However, <strong>ink</strong> doesn't like loose ends, and produces a warning on compilation and/or run-time when it thinks this has happened. The script above produces this on compilation:</p>
<pre><code>WARNING: Apparent loose end exists where the flow runs out. Do you need a '-&gt; END' statement, choice or divert? on line 3 of tests/test.ink
</code></pre>
<p>and this on running:</p>
<pre><code>Runtime error in tests/test.ink line 3: ran out of content. Do you need a '-&gt; DONE' or '-&gt; END'?
</code></pre>
<p>The following plays and compiles without error:</p>
<pre><code>=== top_knot ===
Hello world!
-&gt; END
</code></pre>
<p><code>-&gt; END</code> is a marker for both the writer and the compiler; it means "the story flow should now stop".</p>
<h2><a id="user-content-4-diverts" class="anchor" aria-hidden="true" href="#4-diverts"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4) Diverts</h2>
<h3><a id="user-content-knots-divert-to-knots" class="anchor" aria-hidden="true" href="#knots-divert-to-knots"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Knots divert to knots</h3>
<p>You can tell the story to move from one knot to another using <code>-&gt;</code>, a "divert arrow". Diverts happen immediately without any user input.</p>
<pre><code>=== back_in_london ===

We arrived into London at 9.45pm exactly.
-&gt; hurry_home 

=== hurry_home === 
We hurried home to Savile Row as fast as we could.
</code></pre>
<h4><a id="user-content-diverts-are-invisible" class="anchor" aria-hidden="true" href="#diverts-are-invisible"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Diverts are invisible</h4>
<p>Diverts are intended to be seamless and can even happen mid-sentence:</p>
<pre><code>=== hurry_home ===
We hurried home to Savile Row -&gt; as_fast_as_we_could

=== as_fast_as_we_could ===
as fast as we could.
</code></pre>
<p>produces the same line as above:</p>
<pre><code>We hurried home to Savile Row as fast as we could.
</code></pre>
<h4><a id="user-content-glue" class="anchor" aria-hidden="true" href="#glue"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Glue</h4>
<p>The default behaviour inserts line-breaks before every new line of content. In some cases, however, content must insist on not having a line-break, and it can do so using <code>&lt;&gt;</code>, or "glue".</p>
<pre><code>=== hurry_home ===
We hurried home &lt;&gt; 
-&gt; to_savile_row 

=== to_savile_row ===
to Savile Row 
-&gt; as_fast_as_we_could

=== as_fast_as_we_could ===
&lt;&gt; as fast as we could.
</code></pre>
<p>also produces:</p>
<pre><code>We hurried home to Savile Row as fast as we could.
</code></pre>
<p>You can't use too much glue: multiple glues next to each other have no additional effect. (And there's no way to "negate" a glue; once a line is sticky, it'll stick.)</p>
<h2><a id="user-content-5-branching-the-flow" class="anchor" aria-hidden="true" href="#5-branching-the-flow"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5) Branching The Flow</h2>
<h3><a id="user-content-basic-branching" class="anchor" aria-hidden="true" href="#basic-branching"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic branching</h3>
<p>Combining knots, options and diverts gives us the basic structure of a choose-your-own game.</p>
<pre><code>== paragraph_1 === 
You stand by the wall of Analand, sword in hand.
* [Open the gate] -&gt; paragraph_2 
* [Smash down the gate] -&gt; paragraph_3
* [Turn back and go home] -&gt; paragraph_4

=== paragraph_2 ===
You open the gate, and step out onto the path. 

...
</code></pre>
<h3><a id="user-content-branching-and-joining" class="anchor" aria-hidden="true" href="#branching-and-joining"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Branching and joining</h3>
<p>Using diverts, the writer can branch the flow, and join it back up again, without showing the player that the flow has rejoined.</p>
<pre><code>=== back_in_london ===

We arrived into London at 9.45pm exactly.

*	"There is not a moment to lose!"[] I declared.
	-&gt; hurry_outside 
	
*	"Monsieur, let us savour this moment!"[] I declared.
	My master clouted me firmly around the head and dragged me out of the door. 
	-&gt; dragged_outside 

*	[We hurried home] -&gt; hurry_outside

	
=== hurry_outside ===
We hurried home to Savile Row -&gt; as_fast_as_we_could


=== dragged_outside === 
He insisted that we hurried home to Savile Row 
-&gt; as_fast_as_we_could


=== as_fast_as_we_could === 
&lt;&gt; as fast as we could.
</code></pre>
<h3><a id="user-content-the-story-flow" class="anchor" aria-hidden="true" href="#the-story-flow"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The story flow</h3>
<p>Knots and diverts combine to create the basic story flow of the game. This flow is "flat" - there's no call-stack, and diverts aren't "returned" from.</p>
<p>In most ink scripts, the story flow starts at the top, bounces around in a spaghetti-like mess, and eventually, hopefully, reaches a <code>-&gt; END</code>.</p>
<p>The very loose structure means writers can get on and write, branching and rejoining without worrying about the structure that they're creating as they go. There's no boiler-plate to creating new branches or diversions, and no need to track any state.</p>
<h4><a id="user-content-advanced-loops" class="anchor" aria-hidden="true" href="#advanced-loops"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: Loops</h4>
<p>You absolutely can use diverts to create looped content, and <strong>ink</strong> has several features to exploit this, including ways to make the content vary itself, and ways to control how often options can be chosen.</p>
<p>See the sections on Varying Text and Conditional Options for more information.</p>
<p>Oh, and the following is legal and not a great idea:</p>
<pre><code>=== round ===
and
-&gt; round
</code></pre>
<h2><a id="user-content-6-includes-and-stitches" class="anchor" aria-hidden="true" href="#6-includes-and-stitches"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6) Includes and Stitches</h2>
<h3><a id="user-content-knots-can-be-subdivided" class="anchor" aria-hidden="true" href="#knots-can-be-subdivided"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Knots can be subdivided</h3>
<p>As stories get longer, they become more confusing to keep organised without some additional structure.</p>
<p>Knots can include sub-sections called "stitches". These are marked using a single equals sign.</p>
<pre><code>=== the_orient_express ===
= in_first_class 
	...
= in_third_class
	...
= in_the_guards_van 
	...
= missed_the_train
	...
</code></pre>
<p>One could use a knot for a scene, for instance, and stitches for the events within the scene.</p>
<h3><a id="user-content-stitches-have-unique-names" class="anchor" aria-hidden="true" href="#stitches-have-unique-names"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stitches have unique names</h3>
<p>A stitch can be diverted to using its "address".</p>
<pre><code>*	[Travel in third class]
	-&gt; the_orient_express.in_third_class

*	[Travel in the guard's van]
	-&gt; the_orient_express.in_the_guards_van 
</code></pre>
<h3><a id="user-content-the-first-stitch-is-the-default" class="anchor" aria-hidden="true" href="#the-first-stitch-is-the-default"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The first stitch is the default</h3>
<p>Diverting to a knot which contains stitches will divert to the first stitch in the knot. So:</p>
<pre><code>*	[Travel in first class]
	"First class, Monsieur. Where else?"
	-&gt; the_orient_express
</code></pre>
<p>is the same as:</p>
<pre><code>*	[Travel in first class]
	"First class, Monsieur. Where else?"
	-&gt; the_orient_express.in_first_class 
</code></pre>
<p>(...unless we move the order of the stitches around inside the knot!)</p>
<p>You can also include content at the top of a knot outside of any stitch. However, you need to remember to divert out of it - the engine <em>won't</em> automatically enter the first stitch once it's worked its way through the header content.</p>
<pre><code>=== the_orient_express === 

We boarded the train, but where?
*	[First class] -&gt; in_first_class
*	[Second class] -&gt; in_second_class

= in_first_class 
	...
= in_second_class
	...
</code></pre>
<h3><a id="user-content-local-diverts" class="anchor" aria-hidden="true" href="#local-diverts"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Local diverts</h3>
<p>From inside a knot, you don't need to use the full address for a stitch.</p>
<pre><code>-&gt; the_orient_express

=== the_orient_express ===
= in_first_class 
	I settled my master.
	*	[Move to third class]
		-&gt; in_third_class

= in_third_class
	I put myself in third.
</code></pre>
<p>This means stitches and knots can't share names, but several knots can contain the same stitch name. (So both the Orient Express and the SS Mongolia can have first class.)</p>
<p>The compiler will warn you if ambiguous names are used.</p>
<h3><a id="user-content-script-files-can-be-combined" class="anchor" aria-hidden="true" href="#script-files-can-be-combined"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Script files can be combined</h3>
<p>You can also split your content across multiple files, using an include statement.</p>
<pre><code>INCLUDE newspaper.ink
INCLUDE cities/vienna.ink
INCLUDE journeys/orient_express.ink
</code></pre>
<p>Include statements should always go at the top of a file, and not inside knots.</p>
<p>There are no rules about what file a knot must be in to be diverted to. (In other words, separating files has no effect on the game's namespacing).</p>
<h2><a id="user-content-5-varying-choices" class="anchor" aria-hidden="true" href="#5-varying-choices"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5) Varying Choices</h2>
<h3><a id="user-content-choices-can-only-be-used-once" class="anchor" aria-hidden="true" href="#choices-can-only-be-used-once"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Choices can only be used once</h3>
<p>By default, every choice in the game can only be chosen once. If you don't have loops in your story, you'll never notice this behaviour. But if you do use loops, you'll quickly notice your options disappearing...</p>
<pre><code>=== find_help ===

	You search desperately for a friendly face in the crowd. 
	*	The woman in the hat[?] pushes you roughly aside. -&gt; find_help
	*	The man with the briefcase[?] looks disgusted as you stumble past him. -&gt; find_help 
</code></pre>
<p>produces:</p>
<pre><code>You search desperately for a friendly face in the crowd.

1: The woman in the hat?
2: The man with the briefcase?

&gt; 1
The woman in the hat pushes you roughly aside.
You search desperately for a friendly face in the crowd.

1: The man with the briefcase?

&gt; 
</code></pre>
<p>... and on the next loop you'll have no options left.</p>
<h4><a id="user-content-fallback-choices" class="anchor" aria-hidden="true" href="#fallback-choices"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fallback choices</h4>
<p>The above example stops where it does, because the next choice ends up in an "out of content" run-time error.</p>
<pre><code>&gt; 1
The man with the briefcase looks disgusted as you stumble past him.
You search desperately for a friendly face in the crowd.

Runtime error in tests/test.ink line 6: ran out of content. Do you need a '-&gt; DONE' or '-&gt; END'?
</code></pre>
<p>We can resolve this with a 'fallback choice'. Fallback choices are never displayed to the player, but are 'chosen' by the game if no other options exist.</p>
<p>A fallback choice is simply a "choice without choice text":</p>
<pre><code>*	-&gt; out_of_options
</code></pre>
<p>And, in a slight abuse of syntax, we can make a default choice with content in it, using an "choice then arrow":</p>
<pre><code>* 	-&gt; 
	Mulder never could explain how he got out of that burning box car. -&gt; season_2
</code></pre>
<h4><a id="user-content-example-of-a-fallback-choice" class="anchor" aria-hidden="true" href="#example-of-a-fallback-choice"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example of a fallback choice</h4>
<p>Adding this into the previous example gives us:</p>
<pre><code>=== find_help ===

	You search desperately for a friendly face in the crowd. 
	*	The woman in the hat[?] pushes you roughly aside. -&gt; find_help
	*	The man with the briefcase[?] looks disgusted as you stumble past him. -&gt; find_help 
	*	-&gt;
		But it is too late: you collapse onto the station platform. This is the end.
		-&gt; END
</code></pre>
<p>and produces:</p>
<pre><code>You search desperately for a friendly face in the crowd.

1: The woman in the hat?
2: The man with the briefcase?

&gt; 1
The woman in the hat pushes you roughly aside.
You search desperately for a friendly face in the crowd.

1: The man with the briefcase?

&gt; 1
The man with the briefcase looks disgusted as you stumble past him.
You search desperately for a friendly face in the crowd.
But it is too late: you collapse onto the station platform. This is the end.
</code></pre>
<h3><a id="user-content-sticky-choices" class="anchor" aria-hidden="true" href="#sticky-choices"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sticky choices</h3>
<p>The 'once-only' behaviour is not always what we want, of course, so we have a second kind of choice: the "sticky" choice. A sticky choice is simply one that doesn't get used up, and is marked by a <code>+</code> bullet.</p>
<pre><code>=== homers_couch ===
	+	[Eat another donut]
		You eat another donut. -&gt; homers_couch
	*	[Get off the couch] 
		You struggle up off the couch to go and compose epic poetry.
		-&gt; END
</code></pre>
<p>Default choices can be sticky too.</p>
<pre><code>=== conversation_loop 
	*	[Talk about the weather] -&gt; chat_weather 
	*	[Talk about the children] -&gt; chat_children 
	+	-&gt; sit_in_silence_again
</code></pre>
<h3><a id="user-content-conditional-choices" class="anchor" aria-hidden="true" href="#conditional-choices"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conditional Choices</h3>
<p>You can also turn choices on and off by hand. <strong>ink</strong> has quite a lot of logic available, but the simplest tests is "has the player seen a particular piece of content".</p>
<p>Every knot/stitch in the game has a unique address (so it can be diverted to), and we use the same address to test if that piece of content has been seen.</p>
<pre><code>*	{ not visit_paris } 	[Go to Paris] -&gt; visit_paris
+ 	{ visit_paris 	 } 		[Return to Paris] -&gt; visit_paris 

*	{ visit_paris.met_estelle } [ Telephone Mme Estelle ] -&gt; phone_estelle 
</code></pre>
<p>Note that the test <code>knot_name</code> is true if <em>any</em> stitch inside that knot has been seen.</p>
<p>Note also that conditionals don't override the once-only behaviour of options, so you'll still need sticky options for repeatable choices.</p>
<h4><a id="user-content-advanced-multiple-conditions" class="anchor" aria-hidden="true" href="#advanced-multiple-conditions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: multiple conditions</h4>
<p>You can use several logical tests on an option; if you do, <em>all</em> the tests must all be passed for the option to appear.</p>
<pre><code>*	{ not visit_paris } 	[Go to Paris] -&gt; visit_paris
+ 	{ visit_paris } { not bored_of_paris } 
	[Return to Paris] -&gt; visit_paris 
</code></pre>
<h4><a id="user-content-advanced-knotstitch-labels-are-actually-read-counts" class="anchor" aria-hidden="true" href="#advanced-knotstitch-labels-are-actually-read-counts"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: knot/stitch labels are actually read counts</h4>
<p>The test:</p>
<pre><code>*	{seen_clue} [Accuse Mr Jefferson]
</code></pre>
<p>is actually testing an <em>integer</em> and not a true/false flag. A knot or stitch used this way is actually an integer variable containing the number of times the content at the address has been seen by the player.</p>
<p>If it's non-zero, it'll return true in a test like the one above, but you can also be more specific as well:</p>
<pre><code>* {seen_clue &gt; 3} [Flat-out arrest Mr Jefferson]
</code></pre>
<h4><a id="user-content-advanced-more-logic" class="anchor" aria-hidden="true" href="#advanced-more-logic"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: more logic</h4>
<p><strong>ink</strong> supports a lot more logic and conditionality than covered here - see the section on 'variables and logic'.</p>
<h2><a id="user-content-6-variable-text" class="anchor" aria-hidden="true" href="#6-variable-text"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6) Variable Text</h2>
<h3><a id="user-content-text-can-vary" class="anchor" aria-hidden="true" href="#text-can-vary"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Text can vary</h3>
<p>So far, all the content we've seen has been static, fixed pieces of text. But content can also vary at the moment of being printed.</p>
<h3><a id="user-content-sequences-cycles-and-other-lists" class="anchor" aria-hidden="true" href="#sequences-cycles-and-other-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sequences, cycles and other lists</h3>
<p>The simplest variations of text are from lists, which are selected from depending on some kind of rule. <strong>ink</strong> supports several types. Lists are written inside <code>{</code>...<code>}</code> curly brackets, with elements separated by <code>|</code> symbols (vertical divider lines).</p>
<p>These are only useful if a piece of content is visited more than once!</p>
<h4><a id="user-content-list-types" class="anchor" aria-hidden="true" href="#list-types"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>List types</h4>
<p><strong>Sequences</strong> (the default):</p>
<p>A sequence (or a "stopping list") is a list that tracks how many times its been seen, and each time, shows the next element along. When it runs out of new content it continues the show the final element.</p>
<pre><code>The radio hissed into life. {"Three!"|"Two!"|"One!"|There was the white noise racket of an explosion.|But it was just static.}

{I bought a coffee with my five-pound note.|I bought a second coffee for my friend.|I didn't have enough money to buy any more coffee.}
</code></pre>
<p><strong>Cycles</strong> (marked with a <code>&amp;</code>):</p>
<p>Cycles are like sequences, but they loop their content.</p>
<pre><code>It was {&amp;Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday} today.
</code></pre>
<p><strong>Once-only</strong> (marked with a <code>!</code>):</p>
<p>Once-only lists are like sequences, but when they run out of new content to display, they display nothing. (You can think of a once-only list as a sequence with a blank last entry.)</p>
<pre><code>He told me a joke. {!I laughed politely.|I smiled.|I grimaced.|I promised myself to not react again.}
</code></pre>
<p><strong>Shuffles</strong> (marked with a <code>~</code>):</p>
<p>Shuffles produce randomised output.</p>
<pre><code>I tossed the coin. {~Heads|Tails}.
</code></pre>
<h4><a id="user-content-features-of-lists" class="anchor" aria-hidden="true" href="#features-of-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features of Lists</h4>
<p>Lists can contain blank elements.</p>
<pre><code>I took a step forward. {!||||Then the lights went out. -&gt; eek}
</code></pre>
<p>Lists can be nested.</p>
<pre><code>The Ratbear {&amp;{wastes no time and |}swipes|scratches} {&amp;at you|into your {&amp;leg|arm|cheek}}.
</code></pre>
<p>Lists can include divert statements.</p>
<pre><code>I {waited.|waited some more.|snoozed.|woke up and waited more.|gave up and left. -&gt; leave_post_office}
</code></pre>
<p>They can also be used inside choice text:</p>
<pre><code>+ 	"Hello, {&amp;Master|Monsieur Fogg|you|brown-eyes}!"[] I declared.
</code></pre>
<p>(...with one caveat; you can't start an option's text with a <code>{</code>, as it'll look like a conditional.)</p>
<h4><a id="user-content-examples" class="anchor" aria-hidden="true" href="#examples"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h4>
<p>Lists can be used inside loops to create the appearance of intelligent, state-tracking gameplay without particular effort.</p>
<p>Here's a one-knot version of whack-a-mole. Note we use once-only options, and a fallback, to ensure the mole doesn't move around, and the game will always end.</p>
<pre><code>=== whack_a_mole ===
	{I heft the hammer.|{~Missed!|Nothing!|No good. Where is he?|Ah-ha! Got him! -&gt; END}}
	The {&amp;mole|{&amp;nasty|blasted|foul} {&amp;creature|rodent}} is {in here somewhere|hiding somewhere|still at large|laughing at me|still unwhacked|doomed}. &lt;&gt;
	{!I'll show him!|But this time he won't escape!}
	* 	[{&amp;Hit|Smash|Try} top-left] 	-&gt; whack_a_mole
	*  [{&amp;Whallop|Splat|Whack} top-right] -&gt; whack_a_mole
	*  [{&amp;Blast|Hammer} middle] -&gt; whack_a_mole
	*  [{&amp;Clobber|Bosh} bottom-left] 	-&gt; whack_a_mole
	*  [{&amp;Nail|Thump} bottom-right] 	-&gt; whack_a_mole
	*  [] Then you collapse from hunger. The mole has defeated you! 
		-&gt; END
</code></pre>
<p>produces the following 'game':</p>
<pre><code>I heft the hammer.
The mole is in here somewhere. I'll show him!

1: Hit top-left
2: Whallop top-right
3: Blast middle
4: Clobber bottom-left
5: Nail bottom-right

&gt; 1
Missed!
The nasty creature is hiding somewhere. But this time he won't escape!

1: Splat top-right
2: Hammer middle
3: Bosh bottom-left
4: Thump bottom-right

&gt; 4
Nothing!
The mole is still at large. 
1: Whack top-right
2: Blast middle
3: Clobber bottom-left

&gt; 2
Where is he?
The blasted rodent is laughing at me. 
1: Whallop top-right
2: Bosh bottom-left

&gt; 1
Ah-ha! Got him!
</code></pre>
<p>And here's a bit of lifestyle advice. Note the sticky choice - the lure of the television will never fade:</p>
<pre><code>=== turn_on_television === 
I turned on the television {for the first time|for the second time|again|once more}, but there was {nothing good on, so I turned it off again|still nothing worth watching|even less to hold my interest than before|nothing but rubbish|a program about sharks and I don't like sharks|nothing on}.
+	[Try it again]	 		-&gt; turn_on_television
*	[Go outside instead]	-&gt; go_outside_instead

=== go_outside_instead ===
-&gt; END
</code></pre>
<h4><a id="user-content-advanced-multiline-lists" class="anchor" aria-hidden="true" href="#advanced-multiline-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: Multiline lists</h4>
<p><strong>ink</strong> has another format for making lists of varying content blocks, too. See the section on "multiline blocks" for details.</p>
<h3><a id="user-content-conditional-text" class="anchor" aria-hidden="true" href="#conditional-text"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conditional Text</h3>
<p>Text can also vary depending on logical tests, just as options can.</p>
<pre><code>{met_blofeld: "I saw him. Only for a moment." }
</code></pre>
<p>and</p>
<pre><code>"His real name was {met_blofeld.learned_his_name: Franz|a secret}."
</code></pre>
<p>These can appear as separate lines, or within a section of content. They can even be nested, so:</p>
<pre><code>{met_blofeld: "I saw him. Only for a moment. His real name was {met_blofeld.learned_his_name: Franz|kept a secret}." | "I missed him. Was he particularly evil?" }
</code></pre>
<p>can produce either:</p>
<pre><code>"I saw him. Only for a moment. His real name was Franz."
</code></pre>
<p>or:</p>
<pre><code>"I saw him. Only for a moment. His real name was kept a secret."
</code></pre>
<p>or:</p>
<pre><code>"I missed him. Was he particularly evil?"
</code></pre>
<h2><a id="user-content-7-game-queries" class="anchor" aria-hidden="true" href="#7-game-queries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7) Game Queries</h2>
<p><strong>ink</strong> provides a few useful 'game level' queries about game state, for use in conditional logic. They're not quite parts of the language, but they're always available, and they can't be edited by the author. In a sense, they're the "standard library functions" of the language.</p>
<p>The convention is to name these in capital letters.</p>
<h3><a id="user-content-choice_count" class="anchor" aria-hidden="true" href="#choice_count"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CHOICE_COUNT</h3>
<p><code>CHOICE_COUNT</code> returns the number of options created so far in the current chunk. So for instance.</p>
<pre><code>*	{false} Option A
* 	{true} Option B
*  {CHOICE_COUNT() == 1} Option C
</code></pre>
<p>produces two options, B and C. This can be useful for controlling how many options a player gets on a turn.</p>
<h3><a id="user-content-turns_since" class="anchor" aria-hidden="true" href="#turns_since"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TURNS_SINCE</h3>
<p><code>TURNS_SINCE</code> returns the number of moves (formally, player inputs) since a particular knot/stitch was last visited.</p>
<p>A value of 0 means "was seen as part of the current chunk". A value of -1 means "has never been seen". Any other positive value means it has been seen that many turns ago.</p>
<pre><code>*	{TURNS_SINCE(-&gt; sleeping.intro) &gt; 10} You are feeling tired... -&gt; sleeping 
* 	{TURNS_SINCE(-&gt; laugh) == 0}  You try to stop laughing.
</code></pre>
<p>Note that the parameter passed to <code>TURNS_SINCE</code> is a "divert target", not simply the knot address itself (because the knot address is a number - the read count - not a location in the story...)</p>
<p>TODO: (requirement of passing <code>-c</code> to the compiler)</p>
<h4><a id="user-content-advanced-more-queries" class="anchor" aria-hidden="true" href="#advanced-more-queries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: more queries</h4>
<p>You can make your own external functions, though the syntax is a bit different: see the section on functions below.</p>
<h1><a id="user-content-part-2-weave" class="anchor" aria-hidden="true" href="#part-2-weave"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Part 2: Weave</h1>
<p>So far, we've been building branched stories in the simplest way, with "options" that link to "pages".</p>
<p>But this requires us to uniquely name every destination in the story, which can slow down writing and discourage minor branching.</p>
<p><strong>ink</strong> has a much more powerful syntax available, designed for simplifying story flows which have an always-forwards direction (as most stories do, and most computer programs don't).</p>
<p>This format is called "weave", and its built out of the basic content/option syntax with two new features: the gather mark, <code>-</code>, and the nesting of choices and gathers.</p>
<h2><a id="user-content-1-gathers" class="anchor" aria-hidden="true" href="#1-gathers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1) Gathers</h2>
<h3><a id="user-content-gather-points-gather-the-flow-back-together" class="anchor" aria-hidden="true" href="#gather-points-gather-the-flow-back-together"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gather points gather the flow back together</h3>
<p>Let's go back to the first multi-choice example at the top of this document.</p>
<pre><code>"What's that?" my master asked.
	*	"I am somewhat tired[."]," I repeated.
		"Really," he responded. "How deleterious."
	*	"Nothing, Monsieur!"[] I replied.
	*  "I said, this journey is appalling[."] and I want no more of it."
		"Ah," he replied, not unkindly. "I see you are feeling frustrated. Tomorrow, things will improve."
</code></pre>
<p>In a real game, all three of these options might well lead to the same conclusion - Monsieur Fogg leaves the room. We can do this using a gather, without the need to create any new knots, or add any diverts.</p>
<pre><code>"What's that?" my master asked.
	*	"I am somewhat tired[."]," I repeated.
		"Really," he responded. "How deleterious."
	*	"Nothing, Monsieur!"[] I replied.
		"Very good, then."
	*  "I said, this journey is appalling[."] and I want no more of it."
	"Ah," he replied, not unkindly. "I see you are feeling frustrated. Tomorrow, things will improve."

-	With that Monsieur Fogg left the room.
</code></pre>
<p>This produces the following playthrough:</p>
<pre><code>"What's that?" my master asked.

1: "I am somewhat tired."
2: "Nothing, Monsieur!"
3: "I said, this journey is appalling."

&gt; 1
"I am somewhat tired," I repeated.
"Really," he responded. "How deleterious."
With that Monsieur Fogg left the room.
</code></pre>
<h3><a id="user-content-options-and-gathers-form-chains-of-content" class="anchor" aria-hidden="true" href="#options-and-gathers-form-chains-of-content"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Options and gathers form chains of content</h3>
<p>We can string these gather-and-branch sections together to make branchy sequences that always run forwards.</p>
<pre><code>=== escape === 
I ran through the forest, the dogs snapping at my heels.

	* 	I checked the jewels[] were still in my pocket, and the feel of them brought a spring to my step. &lt;&gt;
	
	*  I did not pause for breath[] but kept on running. &lt;&gt;

	*	I cheered with joy. &lt;&gt;

- 	The road could not be much further! Mackie would have the engine running, and then I'd be safe.
  
	*	I reached the road and looked about[]. And would you believe it?
	* 	I should interrupt to say Mackie is normally very reliable[]. He's never once let me down. Or rather, never once, previously to that night.

-	The road was empty. Mackie was nowhere to be seen.
</code></pre>
<p>This is the most basic kind of weave. The rest of this section details  additional features that allow weaves to nest, contain side-tracks and diversions, divert within themselves, and above all, reference earlier choices to influence later ones.</p>
<h4><a id="user-content-the-weave-philsophy" class="anchor" aria-hidden="true" href="#the-weave-philsophy"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The weave philsophy</h4>
<p>Weaves are more than just a convenient encapsulation of branching flow; they're also a way to author more robust content. The <code>escape</code> example above has already four possible routes through, and a more complex sequence might have lots and lots more. Using normal diverts, one has to check the links by chasing the diverts from point to point and it's easy for errors to creep in.</p>
<p>With a weave, the flow is guaranteed to start at the top and "fall" to the bottom. Flow errors are impossible in a basic weave structure, and the output text can be easily skim read. That means there's no need to actually test all the branches in game to be sure they work as intended.</p>
<p>Weaves also allow for easy redrafting of choice-points; in particular, it's easy to break a sentence up and insert additional choices for variety or pacing reasons, without having to re-engineer any flow.</p>
<h2><a id="user-content-2-nested-flow" class="anchor" aria-hidden="true" href="#2-nested-flow"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2) Nested Flow</h2>
<p>The weaves shown above are quite simple, "flat" structures. Whatever the player does, they take the same number of turns to get from top to bottom. However, sometimes certain choices warrant a bit more depth or complexity.</p>
<p>For that, we allow weaves to nest.</p>
<p>This section comes with a warning. Nested weaves are very powerful and very compact, but they can take a bit of getting used to!</p>
<h3><a id="user-content-options-can-be-nested" class="anchor" aria-hidden="true" href="#options-can-be-nested"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Options can be nested</h3>
<p>Consider the following scene:</p>
<pre><code>- 	"Well, Poirot? Murder or suicide?"
*	"Murder!"
* 	"Suicide!"
-	Ms. Christie lowered her manuscript a moment. The rest of the writing group sat, open-mouthed.
</code></pre>
<p>The first choice presented is "Murder!" or "Suicide!". If Poirot declares a suicide, there's no more to do, but in the case of murder, there's a follow-up question needed - who does he suspect?</p>
<p>We can add new options via a set of nested sub-choices. We tell the script that these new choices are "part of" another choice by using two asterisks, instead of just one.</p>
<pre><code>- 	"Well, Poirot? Murder or suicide?"
	*	"Murder!"
	 	"And who did it?"
		* * 	"Detective-Inspector Japp!"
		* * 	"Captain Hastings!"
		* * 	"Myself!"
	* 	"Suicide!"
	-	Mrs. Christie lowered her manuscript a moment. The rest of the writing group sat, open-mouthed.
</code></pre>
<p>(Note that it's good style to also indent the lines to show the nesting, but the compiler doesn't mind.)</p>
<p>And should we want to add new sub-options to the other route, we do that in similar fashion.</p>
<pre><code>- 	"Well, Poirot? Murder or suicide?"
	*	"Murder!"
	 	"And who did it?"
		* * 	"Detective-Inspector Japp!"
		* * 	"Captain Hastings!"
		* * 	"Myself!"
	* 	"Suicide!"
		"Really, Poirot? Are you quite sure?"
		* * 	"Quite sure."
		* *		"It is perfectly obvious."
	-	Mrs. Christie lowered her manuscript a moment. The rest of the writing group sat, open-mouthed.
</code></pre>
<p>Now, that initial choice of accusation will lead to specific follow-up questions - but either way, the flow will come back together at the gather point, for Mrs. Christie's cameo appearance.</p>
<p>But what if we want a more extended sub-scene?</p>
<h3><a id="user-content-gather-points-can-be-nested-too" class="anchor" aria-hidden="true" href="#gather-points-can-be-nested-too"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gather points can be nested too</h3>
<p>Sometimes, it's not a question of expanding the number of options, but having more than one additional beat of story. We can do this by nesting gather points as well as options.</p>
<pre><code>- 	"Well, Poirot? Murder or suicide?"
		*	"Murder!"
		 	"And who did it?"
			* * 	"Detective-Inspector Japp!"
			* * 	"Captain Hastings!"
			* * 	"Myself!"
			- - 	"You must be joking!"
			* * 	"Mon ami, I am deadly serious."
			* *		"If only..."
		* 	"Suicide!"
			"Really, Poirot? Are you quite sure?"
			* * 	"Quite sure."
			* *		"It is perfectly obvious."
		-	Mrs. Christie lowered her manuscript a moment. The rest of the writing group sat, open-mouthed.
</code></pre>
<p>If the player chooses the "murder" option, they'll have two choices in a row on their sub-branch - a whole flat weave, just for them.</p>
<h4><a id="user-content-advanced-what-gathers-do" class="anchor" aria-hidden="true" href="#advanced-what-gathers-do"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: What gathers do</h4>
<p>Gathers are hopefully intuitive, but their behaviour is a little harder to put into words: in general, after an option has been taken, the story finds the next gather down that isn't on a lower level, and diverts to it.</p>
<p>The basic idea is this: options separate the paths of the story, and gathers bring them back together. (Hence the name, "weave"!)</p>
<h3><a id="user-content-you-can-nest-as-many-levels-are-you-like" class="anchor" aria-hidden="true" href="#you-can-nest-as-many-levels-are-you-like"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>You can nest as many levels are you like</h3>
<p>Above, we used two levels of nesting; the main flow, and the sub-flow. But there's no limit to how many levels deep you can go.</p>
<pre><code>-	"Tell us a tale, Captain!"
	*	"Very well, you sea-dogs. Here's a tale..."
		* * 	"It was a dark and stormy night..." 
				* * * 	"...and the crew were restless..." 
						* * * *  "... and they said to their Captain..." 
								* * * * *		"...Tell us a tale Captain!"
	*	"No, it's past your bed-time."
-	To a man, the crew began to yawn.
</code></pre>
<p>After a while, this sub-nesting gets hard to read and manipulate, so it's good style to divert away to a new stitch if a side-choice goes unwieldy.</p>
<p>But, in theory at least, you could write your entire story as a single weave.</p>
<h3><a id="user-content-example-a-conversation-with-nested-nodes" class="anchor" aria-hidden="true" href="#example-a-conversation-with-nested-nodes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example: a conversation with nested nodes</h3>
<p>Here's a longer example:</p>
<pre><code>- I looked at Monsieur Fogg 
*	... and I could contain myself no longer.
	'What is the purpose of our journey, Monsieur?'
	'A wager,' he replied.
	* * 	'A wager!'[] I returned.
			He nodded. 
			* * * 	'But surely that is foolishness!'
			* * *  'A most serious matter then!'
			- - - 	He nodded again.
			* * *	'But can we win?'
					'That is what we will endeavour to find out,' he answered.
			* * *	'A modest wager, I trust?'
					'Twenty thousand pounds,' he replied, quite flatly.
			* * * 	I asked nothing further of him then[.], and after a final, polite cough, he offered nothing more to me. &lt;&gt;
	* * 	'Ah[.'],' I replied, uncertain what I thought.
	- - 	After that, &lt;&gt;
*	... but I said nothing[] and &lt;&gt; 
- we passed the day in silence.
- -&gt; END
</code></pre>
<p>with a couple of possible playthroughs. A short one:</p>
<pre><code>I looked at Monsieur Fogg

1: ... and I could contain myself no longer.
2: ... but I said nothing

&gt; 2
... but I said nothing and we passed the day in silence.
</code></pre>
<p>and a longer one:</p>
<pre><code>I looked at Monsieur Fogg

1: ... and I could contain myself no longer.
2: ... but I said nothing

&gt; 1
... and I could contain myself no longer.
'What is the purpose of our journey, Monsieur?'
'A wager,' he replied.

1: 'A wager!'
2: 'Ah.'

&gt; 1
'A wager!' I returned.
He nodded.

1: 'But surely that is foolishness!'
2: 'A most serious matter then!'

&gt; 2
'A most serious matter then!'
He nodded again.

1: 'But can we win?'
2: 'A modest wager, I trust?'
3: I asked nothing further of him then.

&gt; 2
'A modest wager, I trust?'
'Twenty thousand pounds,' he replied, quite flatly.
After that, we passed the day in silence.
</code></pre>
<p>Hopefully, this demonstrates the philosophy laid out above: that weaves offer a compact way to offer a lot of branching, a lot of choices, but with the guarantee of getting from beginning to end!</p>
<h2><a id="user-content-3-tracking-a-weave" class="anchor" aria-hidden="true" href="#3-tracking-a-weave"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3) Tracking a Weave</h2>
<p>Sometimes, the weave structure is sufficient. But when it's not, we need a bit more control.</p>
<h3><a id="user-content-weaves-are-largely-unaddressed" class="anchor" aria-hidden="true" href="#weaves-are-largely-unaddressed"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Weaves are largely unaddressed</h3>
<p>By default, lines of content in a weave don't have an address or label, which means they can't be diverted to, and they can't be tested for. In the most basic weave structure, choices vary the path the player takes through the weave and what they see, but once the weave is finished those choices and that path are forgotten.</p>
<p>But should we want to remember what the player has seen, we can - we add in labels where they're needed using the <code>(label_name)</code> syntax.</p>
<h3><a id="user-content-gathers-and-options-can-be-labelled" class="anchor" aria-hidden="true" href="#gathers-and-options-can-be-labelled"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gathers and options can be labelled</h3>
<p>Gather points at any nested level can be labelled using brackets.</p>
<pre><code>-  (top) 
</code></pre>
<p>Once labelled, gather points can be diverted to, or tested for in conditionals, just like knots and stitches. This means you can use previous decisions to alter later outcomes inside the weave, while still keeping all the advantages of a clear, reliable forward-flow.</p>
<p>Options can also be labelled, just like gather points, using brackets. Label brackets come before conditions in the line.</p>
<p>These addresses can be used in conditional tests, which can be useful for creating options unlocked by other options.</p>
<pre><code>=== meet_guard ===
The guard frowns at you.

* 	(greet) [Greet him]
	'Greetings.'
*	(get_out) 'Get out of my way[.'],' you tell the guard.

- 	'Hmm,' replies the guard.

*	{greet} 	'Having a nice day?' // only if you greeted him

* 	'Hmm?'[] you reply.

*	{get_out} [Shove him aside] 	 // only if you threatened him
	You shove him sharply. He stares in reply, and draws his sword!
	-&gt; fight_guard 			// this route diverts out of the weave

-	'Mff,' the guard replies, and then offers you a paper bag. 'Toffee?'
</code></pre>
<h3><a id="user-content-scope" class="anchor" aria-hidden="true" href="#scope"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scope</h3>
<p>Inside the same block of weave, you can simply use the label name; from outside the block you need a path, either to a different stitch within the same knot:</p>
<pre><code>=== knot ===
= stitch_one 
	- (gatherpoint) Some content.
= stitch_two 
	*	{stitch_one.gatherpoint} Option
</code></pre>
<p>or pointing into another knot:</p>
<pre><code>=== knot_one ===
-	(gather_one)
	* {knot_two.stitch_two.gather_two} Option
	
=== knot_two ===
= stitch_two 
	- (gather_two) 
		*	{knot_one.gather_one} Option
</code></pre>
<h4><a id="user-content-advanced-all-options-can-be-labelled" class="anchor" aria-hidden="true" href="#advanced-all-options-can-be-labelled"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: all options can be labelled</h4>
<p>In truth, all content in ink is a weave, even if there are no gathers in sight. That means you can label <em>any</em> option in the game with a bracket label, and then reference it using the addressing syntax. In particular, this means you can test <em>which</em> option a player took to reach a particular outcome.</p>
<pre><code>=== fight_guard ===
...
= throw_something 
*	(rock) [Throw rock at guard] -&gt; throw
* 	(sand) [Throw sand at guard] -&gt; throw

= throw
You hurl {throw_something.rock:a rock|a handful of sand} at the guard.
</code></pre>
<h4><a id="user-content-advanced-loops-in-a-weave" class="anchor" aria-hidden="true" href="#advanced-loops-in-a-weave"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: Loops in a weave</h4>
<p>Labelling allows us to create loops inside weaves. Here's a standard pattern for asking questions of an NPC.</p>
<pre><code>- (opts)
	*	'Can I get a uniform from somewhere?'[] you ask the cheerful guard.
		'Sure. In the locker.' He grins. 'Don't think it'll fit you, though.'
	*	'Tell me about the security system.'
		'It's ancient,' the guard assures you. 'Old as coal.'
	*	'Are there dogs?'
		'Hundreds,' the guard answers, with a toothy grin. 'Hungry devils, too.'
	// We require the player to ask at least one question
	*	{loop} [Enough talking] 
		-&gt; done
- (loop) 
	// loop a few times before the guard gets bored
	{ -&gt; opts | -&gt; opts | }
	He scratches his head.
	'Well, can't stand around talking all day,' he declares. 
- (done)
	You thank the guard, and move away. 
</code></pre>
<h4><a id="user-content-advanced-diverting-to-options" class="anchor" aria-hidden="true" href="#advanced-diverting-to-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: diverting to options</h4>
<p>Options can also be diverted to: but the divert goes to the output of having chosen that choice, <em>as though the choice had been chosen</em>. So the content printed will ignore square bracketed text, and if the option is once-only, it will be marked as used up.</p>
<pre><code>- (opts)
*	[Pull a face]
	You pull a face, and the soldier comes at you! -&gt; shove

*	(shove) [Shove the guard aside] You shove the guard to one side, but he comes back swinging.

*	{shove} [Grapple and fight] -&gt; fight_the_guard

- 	-&gt; opts
</code></pre>
<p>produces:</p>
<pre><code>1: Pull a face
2: Shove the guard aside

&gt; 1
You pull a face, and the soldier comes at you! You shove the guard to one side, but he comes back swinging.

1: Grapple and fight

&gt;
</code></pre>
<h4><a id="user-content-advanced-gathers-directly-after-an-option" class="anchor" aria-hidden="true" href="#advanced-gathers-directly-after-an-option"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: Gathers directly after an option</h4>
<p>The following is valid, and frequently useful.</p>
<pre><code>*	"Are you quite well, Monsieur?"[] I asked.
	- - (quitewell) "Quite well," he replied. 
*	"How did you do at the crossword, Monsieur?"[] I asked.
	-&gt; quitewell 
*	I said nothing[] and neither did my Master.
-	We feel into companionable silence once more.
</code></pre>
<p>Note the level 2 gather point directly below the first option: there's nothing to gather here, really, but it gives us a handy place to divert the second option to.</p>
<h1><a id="user-content-part-3-variables-and-logic" class="anchor" aria-hidden="true" href="#part-3-variables-and-logic"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Part 3: Variables and Logic</h1>
<p>So far we've made conditional text, and conditional choices, using tests based on what content the player has seen so far.</p>
<p><strong>ink</strong> also supports variables, both temporary and global, storing numerical and content data, or even story flow commands. It is fully-featured in terms of logic, and contains a few additional structures to help keep the often complex logic of a branching story better organised.</p>
<h2><a id="user-content-1-global-variables" class="anchor" aria-hidden="true" href="#1-global-variables"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1) Global Variables</h2>
<p>The most powerful kind of variable, and arguably the most useful for a story, is a variable to store some unique property about the state of the game - anything from the amount of money in the protagonist's pocket, to a value representing the protagonist's state of mind.</p>
<p>This kind of variable is called "global" because it can be accessed from anywhere in the story - both set, and read from. (Traditionally, programming tries to avoid this kind of thing, as it allows one part of a program to mess with another, unrelated part. But a story is a story, and stories are all about consequences: what happens in Vegas rarely stays there.)</p>
<h3><a id="user-content-defining-global-variables" class="anchor" aria-hidden="true" href="#defining-global-variables"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Defining Global Variables</h3>
<p>Global variables can be defined anywhere, via a <code>VAR</code> statement. They should be given an initial value, which defines what type of variable they are - integer, floating point (decimal), content, or a story address.</p>
<pre><code>VAR knowledge_of_the_cure = false
VAR players_name = "Emilia"
VAR number_of_infected_people = 521
VAR current_epilogue = -&gt; they_all_die_of_the_plague
</code></pre>
<h3><a id="user-content-using-global-variables" class="anchor" aria-hidden="true" href="#using-global-variables"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Global Variables</h3>
<p>We can test global variables to control options, and provide conditional text, in a similar way to what we have previously seen.</p>
<pre><code>=== the_train ===
	The train jolted and rattled. { mood &gt; 0:I was feeling positive enough, however, and did not mind the odd bump|It was more than I could bear}.
	*	{ not knows_about_wager } 'But, Monsieur, why are we travelling?'[] I asked.
	* 	{ knows_about_wager} I contemplated our strange adventure[]. Would it be possible?
</code></pre>
<h4><a id="user-content-advanced-storing-diverts-as-variables" class="anchor" aria-hidden="true" href="#advanced-storing-diverts-as-variables"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: storing diverts as variables</h4>
<p>A "divert" statement is actually a type of value in itself, and can be stored, altered, and diverted to.</p>
<pre><code>VAR 	current_epilogue = -&gt; everybody_dies 

=== continue_or_quit ===
Give up now, or keep trying to save your Kingdom?
*  [Keep trying!] 	-&gt; more_hopeless_introspection
*  [Give up] 		-&gt; current_epilogue
</code></pre>
<h4><a id="user-content-advanced-global-variables-are-externally-visible" class="anchor" aria-hidden="true" href="#advanced-global-variables-are-externally-visible"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: Global variables are externally visible</h4>
<p>Global variables can be accessed, and altered, from the runtime as well from the story, so provide a good way to communicate between the wider game and the story.</p>
<p>The <strong>ink</strong> layer is often be a good place to store gameplay-variables; there's no save/load issues to consider, and the story itself can react to the current values.</p>
<h3><a id="user-content-printing-variables" class="anchor" aria-hidden="true" href="#printing-variables"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Printing variables</h3>
<p>The value of a variable can be printed as content using an inline syntax similar to sequences, and conditional text:</p>
<pre><code>VAR friendly_name_of_player = "Jackie"
VAR age = 23

My name is Jean Passepartout, but my friend's call me {friendly_name_of_player}. I'm {age} years old.
</code></pre>
<p>This can be useful in debugging. For more complex printing based on logic and variables, see the section on functions.</p>
<h3><a id="user-content-evaluating-strings" class="anchor" aria-hidden="true" href="#evaluating-strings"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Evaluating strings</h3>
<p>It might be noticed that above we refered to variables as being able to contain "content", rather than "strings". That was deliberate, because a string defined in ink can contain ink - although it will always evaluate to a string. (Yikes!)</p>
<pre><code>VAR a_colour = ""

~ a_colour = "{~red|blue|green|yellow}" 

{a_colour} 
</code></pre>
<p>... produces one of red, blue, green or yellow.</p>
<p>Note that once a piece of content like this is evaluated, its value is "sticky". (The quantum state collapses.) So the following:</p>
<pre><code>The goon hits you, and sparks fly before you eyes, {a_colour} and {a_colour}.
</code></pre>
<p>... won't produce a very interesting effect. (If you really want this to work, use a text function to print the colour!)</p>
<p>This is also why</p>
<pre><code>VAR a_colour = "{~red|blue|green|yellow}"
</code></pre>
<p>is explicitly disallowed; it would be evaluated on the construction of the story, which probably isn't what you want.</p>
<h2><a id="user-content-2-logic" class="anchor" aria-hidden="true" href="#2-logic"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2) Logic</h2>
<p>Obviously, our global variables are not intended to be constants, so we need a syntax for altering them.</p>
<p>Since by default, any text in an <strong>ink</strong> script is printed out directly to the screen, we use a markup symbol to indicate that a line of content is intended meant to be doing some numerical work, we use the <code>~</code> mark.</p>
<p>The following statements all assign values to variables:</p>
<pre><code>=== set_some_variables ===
	~ knows_about_wager = true	
	~ x = (x * x) - (y * y) + c
	~ y = 2 * x * y
</code></pre>
<p>and the following will test conditions:</p>
<pre><code>{ x == 1.2 }
{ x / 2 &gt; 4 }
{ y - 1 &lt;= x * x }
</code></pre>
<h3><a id="user-content-mathematics" class="anchor" aria-hidden="true" href="#mathematics"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mathematics</h3>
<p><strong>ink</strong> supports the four basic mathematical operations (<code>+</code>, <code>-</code>, <code>*</code> and <code>/</code>), as well as <code>%</code> (or <code>mod</code>), which returns the remainder after integer division.</p>
<p>If more complex operations are required, one can write functions (using recursion if necessary), or call out to external, game-code functions (for anything more advanced).</p>
<h4><a id="user-content-advanced-numerical-types-are-implicit" class="anchor" aria-hidden="true" href="#advanced-numerical-types-are-implicit"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: numerical types are implicit</h4>
<p>Results of operations - in particular, for division - are typed based on the type of the input. So integer division returns integer, but floating point division returns floating point results.</p>
<pre><code>~ x = 2 / 3
~ y = 7 / 3
~ z = 1.2 / 0.5
</code></pre>
<p>assigns <code>x</code> to be 0, <code>y</code> to be 2 and <code>z</code> to be 2.4.</p>
<h3><a id="user-content-string-queries" class="anchor" aria-hidden="true" href="#string-queries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String queries</h3>
<p>Oddly for a text-engine, <strong>ink</strong> doesn't have much in the way of string-handling: it's assumed that any string conversion you need to do will be handled by the game code (and perhaps by external functions.) But we support three basic queries - equality, inequality, and substring (which we call ? for reasons that will become clear in a later chapter).</p>
<p>The following all return true:</p>
<pre><code>{ "Yes, please." == "Yes, please." }
{ "No, thank you." != "Yes, please." }
{ "Yes, please" ? "ease" }
</code></pre>
<h2><a id="user-content-3-conditional-blocks-ifelse" class="anchor" aria-hidden="true" href="#3-conditional-blocks-ifelse"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3) Conditional blocks (if/else)</h2>
<p>We've seen conditionals used to control options and story content; <strong>ink</strong> also provides an equivalent of the normal if/else-if/else structure.</p>
<h3><a id="user-content-a-simple-if" class="anchor" aria-hidden="true" href="#a-simple-if"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A simple 'if'</h3>
<p>The if syntax takes its cue from the other conditionals used so far, with the <code>{</code>...<code>}</code> syntax indicating that something is being tested.</p>
<pre><code>{ x &gt; 0:
	~ y = x - 1
}
</code></pre>
<p>Else conditions can be provided:</p>
<pre><code>{ x &gt; 0:
	~ y = x - 1
- else:
	~ y = x + 1
}
</code></pre>
<h3><a id="user-content-extended-ifelse-ifelse-blocks" class="anchor" aria-hidden="true" href="#extended-ifelse-ifelse-blocks"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extended if/else if/else blocks</h3>
<p>The above syntax is actually a specific case of a more general structure, something like a "switch" statement of another language:</p>
<pre><code>{
	- x &gt; 0: 
		~ y = x - 1
	- else:	
		~ y = x + 1
}
</code></pre>
<p>And using this form we can include 'else-if' conditions:</p>
<pre><code>{ 
	- x == 0:
		~ y = 0
	- x &gt; 0:
		~ y = x - 1
	- else:
		~ y = x + 1
}
</code></pre>
<p>(Note, as with everything else, the white-space is purely for readability and has no syntactic meaning.)</p>
<h4><a id="user-content-example-context-relevant-content" class="anchor" aria-hidden="true" href="#example-context-relevant-content"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example: context-relevant content</h4>
<p>Note these tests don't have to be variable-based and can use read-counts, just as other conditionals can, and the following construction is quite frequent, as a way of saying "do some content which is relevant to the current game state":</p>
<pre><code>=== dream ===
	{
		- visited_snakes &amp;&amp; not dream_about_snakes:
			~ fear++
			-&gt; dream_about_snakes

		- visited_poland &amp;&amp; not dream_about_polish_beer:
			~ fear--
			-&gt; dream_about_polish_beer 

		- else:
			// breakfast-based dreams have no effect
			-&gt; dream_about_marmalade
	}	
</code></pre>
<p>The syntax has the advantage of being easy to extend, and prioritise.</p>
<h3><a id="user-content-conditional-blocks-are-not-limited-to-logic" class="anchor" aria-hidden="true" href="#conditional-blocks-are-not-limited-to-logic"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conditional blocks are not limited to logic</h3>
<p>Conditional blocks can be used to control story content as well as logic:</p>
<pre><code>I stared at Monsieur Fogg.
{ know_about_wager:
	&lt;&gt; "But surely you are not serious?" I demanded.
- else:
	&lt;&gt; "But there must be a reason for this trip," I observed.
}
He said nothing in reply, merely considering his newspaper with as much thoroughness as entomologist considering his latest pinned addition.
</code></pre>
<p>You can even put options inside conditional blocks:</p>
<pre><code>{ door_open:
	* 	I strode out of the compartment[] and I fancied I heard my master quietly tutting to himself. 			-&gt; go_outside 
- else:
	*	I asked permission to leave[] and Monsieur Fogg looked surprised. 	-&gt; open_door 
	* 	I stood and went to open the door[]. Monsieur Fogg seemed untroubled by this small rebellion. -&gt; open_door
}
</code></pre>
<p>...but note that the lack of weave-syntax and nesting in the above example isn't accidental: to avoid confusing the various kinds of nesting at work, you aren't allowed to include gather points inside conditional blocks.</p>
<h3><a id="user-content-multiline-list-blocks" class="anchor" aria-hidden="true" href="#multiline-list-blocks"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Multiline list blocks</h3>
<p>There's one other class of multiline block, which expands on the list functionality previous mentioned. The following are all valid and do what you might expect:</p>
<pre><code>// Sequence: go through the alternatives, and stick on last 
{ stopping:
	-	I entered the casino.
	-  I entered the casino again.
	-  Once more, I went inside.
}

// Shuffle: show one at random
At the table, I drew a card. &lt;&gt;
{ shuffle:
	- 	Ace of Hearts.
	- 	King of Spades.
	- 	2 of Diamonds.
		'You lose!' crowed the croupier.
		-&gt; leave_casino
}

// Cycle: show each in turn, and then cycle
{ cycle:
	- I held my breath.
	- I waited impatiently.
	- I paused.
}

// Once: show each, once, in turn, until all have been shown
{ once:
	- Would my luck hold?
	- Could I win the hand?
}
</code></pre>
<h2><a id="user-content-4-temporary-variables" class="anchor" aria-hidden="true" href="#4-temporary-variables"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4) Temporary Variables</h2>
<h3><a id="user-content-temporary-variables-are-for-scratch-calculations" class="anchor" aria-hidden="true" href="#temporary-variables-are-for-scratch-calculations"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Temporary variables are for scratch calculations</h3>
<p>Sometimes, a global variable is unwieldy. <strong>ink</strong> provides temporary variables for quick calculations of things.</p>
<pre><code>=== near_north_pole ===
	~ temp number_of_warm_things = 0
	{ blanket:
		~ number_of_warm_things++
	}
	{ ear_muffs:
		~ number_of_warm_things++
	}
	{ gloves:
		~ number_of_warm_things++
	}
	{ number_of_warm_things &gt; 2:
		Despite the snow, I felt incorrigibly snug.
	- else:
		That night I was colder than I have ever been.
	}
</code></pre>
<p>The value in a temporary variable is thrown away after the story leaves the stitch in which it was defined.</p>
<h3><a id="user-content-knots-and-stitches-can-take-parameters" class="anchor" aria-hidden="true" href="#knots-and-stitches-can-take-parameters"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Knots and stitches can take parameters</h3>
<p>A particularly useful form of temporary variable is a parameter. Any knot or stitch can be given a value as a parameter.</p>
<pre><code>*	[Accuse Hasting]
		-&gt; accuse("Hastings")
*	[Accuse Mrs Black]
		-&gt; accuse("Claudia")
*	[Accuse myself] 
		-&gt; accuse("myself")
		
=== accuse(who) ===
	"I accuse {who}!" Poirot declared.
	"Really?" Japp replied. "{who == "myself":You did it?|{who}?}"
	"And why not?" Poirot shot back. 	
</code></pre>
<p>... and you'll need to use parameters if you want to pass a temporary value from one stitch to another!</p>
<h4><a id="user-content-example-a-recursive-knot-definition" class="anchor" aria-hidden="true" href="#example-a-recursive-knot-definition"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example: a recursive knot definition</h4>
<p>Temporary variables are safe to use in recursion (unlike globals), so the following will work.</p>
<pre><code>-&gt; add_one_to_one_hundred(0, 1)

=== add_one_to_one_hundred(total, x) ===
	~ total = total + x
	{ x == 100:
		-&gt; finished(total)
	- else:
		-&gt; add_one_to_one_hundred(total, x + 1)
	}	
	
=== finished(total) ===
	"The result is {total}!" you announce.
	Gauss stares at you in horror.
	-&gt; END
</code></pre>
<p>(In fact, this kind of definition is useful enough that <strong>ink</strong> provides a special kind of knot, called, imaginatively enough, a <code>function</code>, which comes with certain restrictions and can return a value. See the section below.)</p>
<h4><a id="user-content-advanced-sending-divert-targets-as-parameters" class="anchor" aria-hidden="true" href="#advanced-sending-divert-targets-as-parameters"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: sending divert targets as parameters</h4>
<p>Knot/stitch addresses are a type of value, indicated by a <code>-&gt;</code> character, and can be stored and passed around. The following is therefore legal, and often useful:</p>
<pre><code>=== sleeping_in_hut ===
	You lie down and close your eyes.
	-&gt; generic_sleep (-&gt; waking_in_the_hut)

===	 generic_sleep (-&gt; waking)
	You sleep perchance to dream etc. etc.
	-&gt; waking

=== waking_in_the_hut
	You get back to your feet, ready to continue your journey.
</code></pre>
<p>...but note the <code>-&gt;</code> in the <code>generic_sleep</code> definition: that's the one case in <strong>ink</strong> where a parameter needs to be typed: because it's too easy to otherwise accidentally do the following:</p>
<pre><code>=== sleeping_in_hut ===
	You lie down and close your eyes.
	-&gt; generic_sleep (waking_in_the_hut)
</code></pre>
<p>... which sends the read count of <code>waking_in_the_hut</code> into the sleeping knot, and then attempts to divert to it.</p>
<h2><a id="user-content-5-functions" class="anchor" aria-hidden="true" href="#5-functions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5) Functions</h2>
<p>The use of parameters on knots means they are almost functions in the usual sense, but they lack one key concept - that of the call stack, and the use of return values.</p>
<p><strong>ink</strong> includes functions: they are knots, with the following limitations and features:</p>
<p>A function:</p>
<ul>
<li>cannot contain stitches</li>
<li>cannot use diverts or offer choices</li>
<li>can call other functions</li>
<li>can include printed content</li>
<li>can return a value of any type</li>
<li>can recurse safely</li>
</ul>
<p>(Some of these may seem quite limiting, but for more story-oriented call-stack-style features, see the section of Tunnels.)</p>
<p>Return values are provided via the <code>~ return</code> statement.</p>
<h3><a id="user-content-defining-and-calling-functions" class="anchor" aria-hidden="true" href="#defining-and-calling-functions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Defining and calling functions</h3>
<p>To define a function, simply declare a knot to be one:</p>
<pre><code>=== function say_yes_to_everything ===
	~ return true

=== function lerp(a, b, k) ===
	~ return ((b - a) * k) + a
</code></pre>
<p>Functions are called by name, and with brackets, even if they have no parameters:</p>
<pre><code>~ x = lerp(2, 8, 0.3)

*	{say_yes_to_everything()} 'Yes.' 
</code></pre>
<p>As in any other language, a function, once done, returns the flow to wherever it was called from - and despite not being allowed to divert the flow, functions can still call other functions.</p>
<pre><code>=== function say_no_to_nothing === 
	~ return say_yes_to_everything()
</code></pre>
<h3><a id="user-content-functions-dont-have-to-return-anything" class="anchor" aria-hidden="true" href="#functions-dont-have-to-return-anything"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Functions don't have to return anything</h3>
<p>A function does not need to have a return value, and can simply do something that is worth packaging up:</p>
<pre><code>=== function harm(x) ===
	{ stamina &lt; x:
		~ stamina = 0
	- else:
		~ stamina = stamina - x
	}
</code></pre>
<p>...though remember a function cannot divert, so while the above prevents a negative Stamina value, it won't kill a player who hits zero.</p>
<h3><a id="user-content-functions-can-be-called-inline" class="anchor" aria-hidden="true" href="#functions-can-be-called-inline"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Functions can be called inline</h3>
<p>Functions can be called on <code>~</code> content lines, but can also be called during a piece of content. In this context, the return value, if there is one, is printed (as well as anything else the function wants to print.) If there is no return value, nothing is printed.</p>
<p>Content is, by default, 'glued in', so the following:</p>
<pre><code>Monsieur Fogg was looking {describe_health(health)}.

=== function describe_health(x) ===
{ 
- x == 100:
	~ return "spritely"
- x &gt; 75:
	~ return "chipper"
- x &gt; 45:
	~ return "somewhat flagging"
- else:
	~ return "despondent"
}
</code></pre>
<p>produces:</p>
<pre><code>Monsieur Fogg was looking despondent.
</code></pre>
<h4><a id="user-content-examples-1" class="anchor" aria-hidden="true" href="#examples-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h4>
<p>For instance, you might include:</p>
<pre><code>=== function max(a,b) ===
	{ a &lt; b:
		~ return b
	- else:
		~ return a
	}

=== function exp(x, e) ===
	// returns x to the power e where e is an integer
	{ e &lt;= 0:
		~ return 1
	- else:	
		~ return x * exp(x, e - 1)
	}
</code></pre>
<p>Then:</p>
<pre><code>The maximum of 2^5 and 3^3 is {max(exp(2,5), exp(3,3))}. 
</code></pre>
<p>produces:</p>
<pre><code>The maximum of 2^5 and 3^3 is 32.
</code></pre>
<h4><a id="user-content-example-turning-numbers-into-words" class="anchor" aria-hidden="true" href="#example-turning-numbers-into-words"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example: turning numbers into words</h4>
<p>The following example is long, but appears in pretty much every inkle game to date. (Recall that a hyphenated line inside multiline curly braces indicates either "a condition to test" or, if the curly brace began with a variable, "a value to compare against".)</p>
<pre><code>=== function print_num(x) ===
{ 
    - x &gt;= 1000:
        {print_num(x / 1000)} thousand { x mod 1000 &gt; 0:{print_num(x mod 1000)}}
    - x &gt;= 100:
        {print_num(x / 100)} hundred { x mod 100 &gt; 0:and {print_num(x mod 100)}}
    - x == 0:
        zero
    - else:
        { x &gt;= 20:
            { x / 10:
                - 2: twenty
                - 3: thirty
                - 4: forty
                - 5: fifty
                - 6: sixty
                - 7: seventy
                - 8: eighty
                - 9: ninety
            }
            { x mod 10 &gt; 0:&lt;&gt;-&lt;&gt;}
        }
        { x &lt; 10 || x &gt; 20:
            { x mod 10:
                - 1: one
                - 2: two
                - 3: three
                - 4: four        
                - 5: five
                - 6: six
                - 7: seven
                - 8: eight
                - 9: nine
            }
        - else:     
            { x:
                - 10: ten
                - 11: eleven       
                - 12: twelve
                - 13: thirteen
                - 14: fourteen
                - 15: fifteen
                - 16: sixteen      
                - 17: seventeen
                - 18: eighteen
                - 19: nineteen
            }
        }
}
</code></pre>
<p>which enables us to write things like:</p>
<pre><code>~ price = 15

I pulled out {print_num(price)} coins from my pocket and slowly counted them. 
"Oh, never mind," the trader replied. "I'll take half." And she took {print_num(price / 2)}, and pushed the rest back over to me.
</code></pre>
<h3><a id="user-content-parameters-can-be-passed-by-reference" class="anchor" aria-hidden="true" href="#parameters-can-be-passed-by-reference"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parameters can be passed by reference</h3>
<p>Function parameters can also be passed 'by reference', meaning that the function can actually alter the the variable being passed in, instead of creating a temporary variable with that value.</p>
<p>For instance, most <strong>inkle</strong> stories include the following:</p>
<pre><code>=== function alter(ref x, k) ===
	~ x = x + k
</code></pre>
<p>Lines such as:</p>
<pre><code>~ gold = gold + 7
~ health = health - 4
</code></pre>
<p>then become:</p>
<pre><code>~ alter(gold, 7)
~ alter(health, -4)
</code></pre>
<p>which are slightly easier to read, and (more usefully) can be done inline for maximum compactness.</p>
<pre><code>*	I ate a biscuit[] and felt refreshed. {alter(health, 2)}
* 	I gave a biscuit to Monsieur Fogg[] and he wolfed it down most undecorously. {alter(foggs_health, 1)}
-	&lt;&gt; Then we continued on our way.
</code></pre>
<p>Wrapping up simple operations in function can also provide a simple place to put debugging information, if required.</p>
<h2><a id="user-content-6-constants" class="anchor" aria-hidden="true" href="#6-constants"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6) Constants</h2>
<h3><a id="user-content-global-constants" class="anchor" aria-hidden="true" href="#global-constants"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Global Constants</h3>
<p>Interactive stories often rely on state machines, tracking what stage some higher level process has reached. There are lots of ways to do this, but the most conveninent is to use constants.</p>
<p>Sometimes, it's convenient to define constants to be strings, so you can print them out, for gameplay or debugging purposes.</p>
<pre><code>CONST HASTINGS = "Hastings"
CONST POIROT = "Poirot"
CONST JAPP = "Japp"

VAR current_chief_suspect = HASTINGS

=== review_evidence ===
	{ found_japps_bloodied_glove:
		~ current_chief_suspect = POIROT
	}
	Current Suspect: {current_chief_suspect}
</code></pre>
<p>Sometimes giving them values is useful:</p>
<pre><code>CONST PI = 3.14
CONST VALUE_OF_TEN_POUND_NOTE = 10
</code></pre>
<p>And sometimes the numbers are useful in other ways:</p>
<pre><code>CONST LOBBY = 1
CONST STAIRCASE = 2
CONST HALLWAY = 3

CONST HELD_BY_AGENT = -1

VAR secret_agent_location = LOBBY
VAR suitcase_location = HALLWAY

=== report_progress ===
{  secret_agent_location = suitcase_location:
	The secret agent grabs the suitcase!
	~ suitcase_location = HELD_BY_AGENT  
	
-  secret_agent_location &lt; suitcase_location:
	The secret agent moves forward.
	~ secret_agent_location++
}
</code></pre>
<p>Constants are simply a way to allow you to give story states easy-to-understand names.</p>
<h2><a id="user-content-7-advanced-game-side-logic" class="anchor" aria-hidden="true" href="#7-advanced-game-side-logic"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7) Advanced: Game-side logic</h2>
<p>There are two core ways to provide game hooks in the <strong>ink</strong> engine. External function declarations in ink allow you to directly call C# functions in the game, and variable observers are callbacks that are fired in the game when ink variables are modified. Both of these are described in <a href="https://github.com/inkle/ink/blob/master/Documentation/RunningYourInk.md">Running your ink</a>.</p>
<h1><a id="user-content-part-4-advanced-flow-control" class="anchor" aria-hidden="true" href="#part-4-advanced-flow-control"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Part 4: Advanced Flow Control</h1>
<h2><a id="user-content-1-tunnels" class="anchor" aria-hidden="true" href="#1-tunnels"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1) Tunnels</h2>
<p>The default structure for <strong>ink</strong> stories is a "flat" tree of choices, branching and joining back together, perhaps looping, but with the story always being "at a certain place".</p>
<p>But this flat structure makes certain things difficult: for example, imagine a game in which the following interaction can happen:</p>
<pre><code>=== crossing_the_date_line ===
*	"Monsieur!"[] I declared with sudden horror. "I have just realised. We have crossed the international date line!"
-	Monsieur Fogg barely lifted an eyebrow. "I have adjusted for it."
*	I mopped the sweat from my brow[]. A relief!
* 	I nodded, becalmed[]. Of course he had!
*  I cursed, under my breath[]. Once again, I had been belittled!
</code></pre>
<p>...but it can happen at several different places in the story. We don't want to have to write copies of the content for each different place, but when the content is finished it needs to know where to return to. We can do this using parameters:</p>
<pre><code>=== crossing_the_date_line(-&gt; return_to) ===
...
-	-&gt; return_to 

...

=== outside_honolulu ===
We arrived at the large island of Honolulu.
- (postscript) 
	{crossing_the_date_line(-&gt; done)} 
- (done)
	-&gt; END 

...

=== outside_pitcairn_island ===
The boat sailed along the water towards the tiny island.
- (postscript) 
	{crossing_the_date_line(-&gt; done)} 
- (done)
	-&gt; END 
</code></pre>
<p>Both of these locations now call and execute the same segment of storyflow, but once finished they return to where they need to go next.</p>
<p>But what if the section of story being called is more complex - what if it spreads across several knots? Using the above, we'd have to keep passing the 'return-to' parameter from knot to knot, to ensure we always knew where to return.</p>
<p>So instead, <strong>ink</strong> integrates this into the language with a new kind of divert, that functions rather like a subroutine, and is called a 'tunnel'.</p>
<h3><a id="user-content-tunnels-run-sub-stories" class="anchor" aria-hidden="true" href="#tunnels-run-sub-stories"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tunnels run sub-stories</h3>
<p>The tunnel syntax looks like a divert, with another divert on the end:</p>
<pre><code>-&gt; crossing_the_date_line -&gt;
</code></pre>
<p>This means "do the crossing_the_date_line story, then continue from here".</p>
<p>Inside the tunnel itself, the syntax is simplified from the parameterised example: all we do is end the tunnel using the <code>-&gt;-&gt;</code> statement which means, essentially, "go on".</p>
<pre><code>=== crossing_the_date_line === 
// this is a tunnel!
...
- 	-&gt;-&gt;
</code></pre>
<p>Note that tunnel knots aren't declared as such, so the compiler won't check that tunnels really do end in <code>-&gt;-&gt;</code> statements, except at run-time. So you will need to write carefully to ensure that all the flows into a tunnel really do come out again.</p>
<p>Tunnels can also be chained together, or finish on a normal divert:</p>
<pre><code>... 
// this runs the tunnel, then diverts to 'done'
-&gt; crossing_the_date_line -&gt; done
...

... 
//this runs one tunnel, then another, then diverts to 'done'
-&gt; crossing_the_date_line -&gt; check_foggs_health -&gt; done
...
</code></pre>
<p>Tunnels can be nested, so the following is valid:</p>
<pre><code>=== plains ===
= night_time 
	The dark grass is soft under your feet.
	+	[Sleep]
		-&gt; sleep_here -&gt; wake_here -&gt; day_time
= day_time 
	It is time to move on.
	
=== wake_here ===
	You wake as the sun rises.
	+	[Eat something]
		-&gt; eat_something -&gt;
	+	[Make a move]
	-	-&gt;-&gt;

=== sleep_here ===
	You lie down and try to close your eyes.
	-&gt; monster_attacks -&gt; 
	Then it is time to sleep.
	-&gt; dream -&gt;
	-&gt;-&gt;
</code></pre>
<p>... and so on.</p>
<h4><a id="user-content-advanced-tunnels-use-a-call-stack" class="anchor" aria-hidden="true" href="#advanced-tunnels-use-a-call-stack"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: Tunnels use a call-stack</h4>
<p>Tunnels are on a call-stack, so can safely recurse.</p>
<h2><a id="user-content-2-threads" class="anchor" aria-hidden="true" href="#2-threads"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2) Threads</h2>
<p>So far, everything in ink has been entirely linear, despite all the branching and diverting. But it's actually possible for a writer to 'fork' a story into different sub-sections, to cover more possible player actions.</p>
<p>We call this 'threading', though it's not really threading in the sense that computer scientists mean it: it's more like stitching in new content from various places.</p>
<p>Note that this is definitely an advanced feature: the engineering stories becomes somewhat more complex once threads are involved!</p>
<h3><a id="user-content-threads-join-multiple-sections-together" class="anchor" aria-hidden="true" href="#threads-join-multiple-sections-together"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Threads join multiple sections together</h3>
<p>Threads allow you to compose sections of content from multiple sources in one go. For example:</p>
<pre><code>== thread_example ==
I had a headache; threading is hard to get your head around.
&lt;- conversation
&lt;- walking


== conversation ==
It was a tense moment for Monty and me.
 * "What did you have for lunch today?"[] I asked.
    "Spam and eggs," he replied.
 * "Nice weather, we're having,"[] I said.
    "I've seen better," he replied.
 - -&gt; house

== walking ==
We continued to walk down the dusty road.
 * [Continue walking]
    -&gt; house

== house ==
Before long, we arrived at his house.
-&gt; END
</code></pre>
<p>It allows multiple sections of story to combined together into a single section:</p>
<pre><code>I had a headache; threading is hard to get your head around.
It was a tense moment for Monty and me.
We continued to walk down the dusty road.
1: "What did you have for lunch today?"
2: "Nice weather, we're having,"
3: Continue walking
</code></pre>
<p>On encountering a thread statement such as <code>&lt;- conversation</code>, the compiler will fork the story flow. The first fork considered will run the content at <code>conversation</code>, collecting up any options it finds. Once it has run out of flow here it'll then run the other fork.</p>
<p>All the content is collected and shown to the player. But when a choice is chosen, the engine will move to that fork of the story and collapse and discard the others.</p>
<p>Note that global variables are <em>not</em> forked, including the read counts of knots and stitches.</p>
<h3><a id="user-content-uses-of-threads" class="anchor" aria-hidden="true" href="#uses-of-threads"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Uses of threads</h3>
<p>In a normal story, threads might never be needed.</p>
<p>But for games with lots of independent moving parts, threads quickly become essential. Imagine a game in which characters move independently around a map: the main story hub for a room might look like the following:</p>
<pre><code>CONST HALLWAY = 1
CONST OFFICE = 2

VAR player_location = HALLWAY
VAR generals_location = HALLWAY 
VAR doctors_location = OFFICE

== run_player_location
	{ 
		- player_location == HALLWAY: -&gt; hallway 
	}

== hallway ==	
	&lt;- characters_present
	*	[Drawers]	-&gt; examine_drawers
	* 	[Wardrobe] -&gt; examine_wardrobe
	*  [Go to Office] 	-&gt; go_office
	-	-&gt; run_player_location	
= examine_drawers 
	// etc... 

// Here's the thread, which mixes in dialogue for characters you share the room with at the moment.

== characters_present(room)
	{ generals_location == player_location:
		&lt;- general_conversation
	}
	{ doctors_location == room:
		&lt;- doctor_conversation
	}
	
== general_conversation 
	*	[Ask the General about the bloodied knife]
		"It's a bad business, I can tell you."
	-	-&gt; run_player_location

== doctor_conversation 
	*	[Ask the Doctor about the bloodied knife]
		"There's nothing strange about blood, is there?"
	-	-&gt; run_player_location 
</code></pre>
<p>Note in particular, that we need an explicit way to return the player who has gone down a side-thread to return to the main flow. In most cases, threads will either need a parameter telling them where to return to, or they'll need to end the current story section.</p>
<h3><a id="user-content-when-does-a-side-thread-end" class="anchor" aria-hidden="true" href="#when-does-a-side-thread-end"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When does a side-thread end?</h3>
<p>Side-threads end when they run out of flow to process: and note, they collect up options to display later (unlike tunnels, which collect options, display them and follow them until they hit an explicit return, possibly several moves later).</p>
<p>Sometimes a thread has no content to offer - perhaps there is no conversation to have with a character after all, or perhaps we have simply not written it yet. In that case, we must mark the end of the thread explicitly.</p>
<p>If we didn't, the end of content might be a story-bug or a hanging story thread, and we want the compiler to tell us about those.</p>
<h3><a id="user-content-using---done" class="anchor" aria-hidden="true" href="#using---done"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using <code>-&gt; DONE</code></h3>
<p>So cases where we want to mark the end of a thread, we use <code>-&gt; DONE</code>: meaning "the flow intentionally ends here".</p>
<p>Note that we don't need a <code>-&gt; DONE</code> if the flow ends with options that fail their conditions. The engine treats this as a valid, intentional, end of flow state.</p>
<p><strong>You do not need a <code>-&gt; DONE</code> in a thread after an option has been chosen</strong>. Once an option is chosen, a thread is no longer a thread - it is simply the normal story flow once more.</p>
<p>Using <code>-&gt; END</code> in this case will not end the thread, but the whole story flow. (And this is the real reason for having two different ways to end flow.)</p>
<h4><a id="user-content-example-adding-the-same-choice-to-several-places" class="anchor" aria-hidden="true" href="#example-adding-the-same-choice-to-several-places"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example: adding the same choice to several places</h4>
<p>Threads can be used to add the same choice into lots of different places. When using them this way, it's normal to pass a divert as a parameter, to tell the story where to go after the choice is done.</p>
<pre><code>=== outside_the_house
The front step. The house smells. Of murder. And lavender.
- (top)
	&lt;- review_case_notes(-&gt; top) 
	*	[Go through the front door] 
		I stepped inside the house.
		-&gt; the_hallway
	* 	[Sniff the air]
		I hate lavender. It makes me think of soap, and soap makes me think about my marriage. 
		-&gt; top

=== the_hallway
The hallway. Front door open to the street. Little bureau.
- (top)
	&lt;- review_case_notes(-&gt; top) 
	*	[Go through the front door] 
		I stepped out into the cool sunshine. 
		-&gt; outside_the_house
	* 	[Open the bureau] 
		Keys. More keys. Even more keys. How many locks do these people need?
		-&gt; top

=== review_case_notes(-&gt; go_back_to) 
+	{not done || TURNS_SINCE(-&gt; done) &gt; 10} 
	[Review my case notes] 
	// the conditional ensures you don't get the option to check repeatedly
 	{I|Once again, I} flicked through the notes I'd made so far. Still not obvious suspects.
- 	(done) -&gt; go_back_to
</code></pre>
<p>Note this is different than a tunnel, which runs the same block of content but doesn't give a player a choice. So a layout like:</p>
<pre><code>&lt;- childhood_memories(-&gt; next) 
*	[Look out of the window] 
 	I daydreamed as we rolled along... 
 - (next) Then the whistle blew...
</code></pre>
<p>might do exactly the same thing as:</p>
<pre><code>*	[Remember my childhood] 
	-&gt; think_back -&gt; 
*	[Look out of the window] 
	I daydreamed as we rolled along...
- 	(next) Then the whistle blew... 	
</code></pre>
<p>but as soon as the option being threaded in includes multiple choices, or conditional logic on choices (or any text content, of course!), the thread version becomes more practical.</p>
<h4><a id="user-content-example-organisation-of-wide-choice-points" class="anchor" aria-hidden="true" href="#example-organisation-of-wide-choice-points"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example: organisation of wide choice points</h4>
<p>A game which uses ink as a script rather than a literal output might often generate very large numbers of parallel choices, intended to be filtered by the player via some other in-game interaction - such as walking around an environment. Threads can be useful in these cases simply to divide up choices.</p>
<pre><code>=== the_kitchen 
- (top)
	&lt;- drawers(-&gt; top)
	&lt;- cupboards(-&gt; top) 
	&lt;- room_exits
= drawers (-&gt; goback)
	// choices about the drawers...
	...
= cupboards(-&gt; goback) 
	// choices about cupboards
	...
= room_exits
	// exits; doesn't need a "return point" as if you leave, you go elsewhere
	...
</code></pre>
<h1><a id="user-content-part-5-advanced-state-tracking" class="anchor" aria-hidden="true" href="#part-5-advanced-state-tracking"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Part 5: Advanced State Tracking</h1>
<p>Games with lots of interaction can get very complex, very quickly and the writer's job is often as much about maintaining continuity as it is about content.</p>
<p>This becomes particularly important if the game text is intended to model anything - whether it's a game of cards, the player's knowledge of the gameworld so far, or the state of the various light-switches in a house.</p>
<p><strong>ink</strong> does not provide a full world-modelling system in the manner of a classic parser IF authoring language - there are no "objects", no concepts of "containment" or being "open" or "locked". However, it does provide a simple yet powerful system for tracking state-changes in a very flexible way, to enable writers to approximate world models where necessary.</p>
<h4><a id="user-content-note-new-feature-alert" class="anchor" aria-hidden="true" href="#note-new-feature-alert"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Note: New feature alert!</h4>
<p>This feature is very new to the language. That means we haven't begun to discover all the ways it might be used - but we're pretty sure it's going to be useful! So if you think of a clever usage we'd love to know!</p>
<h2><a id="user-content-1-basic-lists" class="anchor" aria-hidden="true" href="#1-basic-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1) Basic Lists</h2>
<p>The basic unit of state-tracking is a list of states, defined using the <code>LIST</code> keyword. Note that a list is really nothing like a C# list (which is an array).</p>
<p>For instance, we might have:</p>
<pre><code>LIST kettleState = cold, boiling, recently_boiled
</code></pre>
<p>This line defines two things: firstly three new values - <code>cold</code>, <code>boiling</code> and <code>recently_boiled</code> - and secondly, a variable, called <code>kettleState</code>, to hold these states.</p>
<p>We can tell the list what value to take:</p>
<pre><code>~ kettleState = cold
</code></pre>
<p>We can change the value:</p>
<pre><code>*	[Turn on kettle] 
	The kettle begins to bubble and boil.
	~ kettleState = boiling
</code></pre>
<p>We can query the value:</p>
<pre><code>*	[Touch the kettle] 
	{ kettleState == cold:
		The kettle is cool to the touch. 
	- else:
	 	The outside of the kettle is very warm! 
	}
</code></pre>
<p>For convenience, we can give a list a value when it's defined using a bracket:</p>
<pre><code>LIST kettleState = cold, (boiling), recently_boiled
// at the start of the game, this kettle is switched on. Edgy, huh?
</code></pre>
<p>...and if the notation for that looks a bit redundant, there's a reason for that coming up in a few subsections time.</p>
<h2><a id="user-content-2-reusing-lists" class="anchor" aria-hidden="true" href="#2-reusing-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2) Reusing Lists</h2>
<p>The above example is fine for the kettle, but what if we have a pot on the stove as well? We can then define a list of states, but put them into variables - and as many variables as we want.</p>
<pre><code>LIST daysOfTheWeek = Monday, Tuesday, Wednesday, Thursday, Friday 
VAR today = Monday
VAR tomorrow = Tuesday
</code></pre>
<h3><a id="user-content-states-can-be-used-repeatedly" class="anchor" aria-hidden="true" href="#states-can-be-used-repeatedly"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>States can be used repeatedly</h3>
<p>This allows us to use the same state machine in multiple places.</p>
<pre><code>LIST heatedWaterStates = cold, boiling, recently_boiled
VAR kettleState = cold 
VAR potState = cold 

*	{kettleState == cold} [Turn on kettle] 
	The kettle begins to boil and bubble. 
	~ kettleState = boiling
*	{potState == cold} [Light stove] 
 	The water in the pot begins to boil and bubble. 
 	~ potState = boiling
</code></pre>
<p>But what if we add a microwave as well? We might want start generalising our functionality a bit:</p>
<pre><code>LIST heatedWaterStates = cold, boiling, recently_boiled
VAR kettleState = cold 
VAR potState = cold 
VAR microwaveState = cold

=== function boilSomething(ref thingToBoil, nameOfThing) 
	The {nameOfThing} begins to heat up. 
	~ thingToBoil = boiling 

=== do_cooking
*	{kettleState == cold} [Turn on kettle] 
	{boilSomething(kettleState, "kettle")}
*	{potState == cold} [Light stove] 
	{boilSomething(potState, "pot")}		*	{microwaveState == cold} [Turn on microwave] 
	{boilSomething(microwaveState, "microwave")}
</code></pre>
<p>or even...</p>
<pre><code>LIST heatedWaterStates = cold, boiling, recently_boiled
VAR kettleState = cold 
VAR potState = cold 
VAR microwaveState = cold

=== cook_with(nameOfThing, ref thingToBoil) 
+ 	{thingToBoil == cold} [Turn on {nameOfThing}]
  	The {nameOfThing} begins to heat up. 
	~ thingToBoil = boiling 
	-&gt; do_cooking.done
		
=== do_cooking
&lt;- cook_with("kettle", kettleState)
&lt;- cook_with("pot", potState)
&lt;- cook_with("microwave", microwaveState)
- (done) 
</code></pre>
<p>Note that the "heatedWaterStates" list is still available as well, and can still be tested, and take a value.</p>
<h4><a id="user-content-list-values-can-share-names" class="anchor" aria-hidden="true" href="#list-values-can-share-names"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>List values can share names</h4>
<p>Reusing lists brings with it ambiguity. If we have:</p>
<pre><code>LIST colours = red, green, blue, purple 
LIST moods = mad, happy, blue

VAR status = blue
</code></pre>
<p>... how can the compiler know which blue you meant?</p>
<p>We resolve these using a <code>.</code> syntax similar to that used for knots and stitches.</p>
<pre><code>VAR status = colours.blue 
</code></pre>
<p>...and the compiler will issue an error until you specify.</p>
<p>Note the "family name" of the state, and the variable containing a state, are totally separate. So</p>
<pre><code>{ statesOfGrace == statesOfGrace.fallen:
	// is the current state "fallen"
}
</code></pre>
<p>... is correct.</p>
<h4><a id="user-content-advanced-a-list-is-actually-a-variable" class="anchor" aria-hidden="true" href="#advanced-a-list-is-actually-a-variable"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: a LIST is actually a variable</h4>
<p>One surprising feature is the statement</p>
<pre><code>LIST statesOfGrace = ambiguous, saintly, fallen 
</code></pre>
<p>actually does two things simultaneously: it creates three values, <code>ambiguous</code>, <code>saintly</code> and <code>fallen</code>, and gives them the name-parent <code>statesOfGrace</code> if needed; and it creates a variable called <code>statesOfGrace</code>.</p>
<p>And that variable can be used like a normal variable. So the following is valid, if horribly confusing and a bad idea:</p>
<pre><code>LIST statesOfGrace = ambiguous, saintly, fallen

~ statesOfGrace = 3.1415 // set the variable to a number not a list value
</code></pre>
<p>...and it wouldn't preclude the following from being fine:</p>
<pre><code>~ temp anotherStateOfGrace = statesOfGrace.saintly
</code></pre>
<h2><a id="user-content-3-list-values" class="anchor" aria-hidden="true" href="#3-list-values"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3) List Values</h2>
<p>When a list is defined, the values are listed in an order, and that order is considered to be significant. In fact, we can treat these values as if they <em>were</em> numbers. (That is to say, they are enums.)</p>
<pre><code>LIST volumeLevel = off, quiet, medium, loud, deafening
VAR lecturersVolume = quiet
VAR murmurersVolume = quiet

{ lecturersVolume &lt; deafening:
	~ lecturersVolume++
	
	{ lecturersVolume &gt; murmurersVolume:
		~ murmurersVolume++
		The murmuring gets louder.
	}
}
</code></pre>
<p>The values themselves can be printed using the usual <code>{...}</code> syntax, but this will print their name.</p>
<pre><code>The lecturer's voice becomes {lecturersVolume}.
</code></pre>
<h3><a id="user-content-converting-values-to-numbers" class="anchor" aria-hidden="true" href="#converting-values-to-numbers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Converting values to numbers</h3>
<p>The numerical value, if needed, can be got explicitly using the LIST_VALUE function. Note the first value in a list has the value 1, and not the value 0.</p>
<pre><code>The lecturer has {LIST_VALUE(deafening) - LIST_VALUE(lecturersVolume)} notches still available to him.
</code></pre>
<h3><a id="user-content-converting-numbers-to-values" class="anchor" aria-hidden="true" href="#converting-numbers-to-values"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Converting numbers to values</h3>
<p>You can go the other way by using the list's name as a function:</p>
<pre><code>LIST Numbers = one, two, three 
VAR score = one
~ score = Numbers(2) // score will be "two"
</code></pre>
<h3><a id="user-content-advanced-defining-your-own-numerical-values" class="anchor" aria-hidden="true" href="#advanced-defining-your-own-numerical-values"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: defining your own numerical values</h3>
<p>By default, the values in a list start at 1 and go up by one each time, but you can specify your own values if you need to.</p>
<pre><code>LIST primeNumbers = two = 2, three = 3, five = 5
</code></pre>
<p>If you specify a value, but not the next value, ink will assume an increment of 1. So the following is the same:</p>
<pre><code>LIST primeNumbers = two = 2, three, five = 5
</code></pre>
<h2><a id="user-content-4-multivalued-lists" class="anchor" aria-hidden="true" href="#4-multivalued-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4) Multivalued Lists</h2>
<p>The following examples have all included one deliberate untruth, which we'll now remove. Lists - and variables containing list values - do not have to contain only one value.</p>
<h3><a id="user-content-lists-are-boolean-sets" class="anchor" aria-hidden="true" href="#lists-are-boolean-sets"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lists are boolean sets</h3>
<p>A list variable is not a variable containing a number. Rather, a list is like the in/out nameboard in an accommodation block. It contains a list of names, each of which has a room-number associated with it, and a slider to say "in" or "out".</p>
<p>Maybe no one is in:</p>
<pre><code>LIST DoctorsInSurgery = Adams, Bernard, Cartwright, Denver, Eamonn 
</code></pre>
<p>Maybe everyone is:</p>
<pre><code>LIST DoctorsInSurgery = (Adams), (Bernard), (Cartwright), (Denver), (Eamonn)
</code></pre>
<p>Or maybe some are and some aren't:</p>
<pre><code>LIST DoctorsInSurgery = (Adams), Bernard, (Cartwright), Denver, Eamonn 
</code></pre>
<p>Names in brackets are included in the initial state of the list.</p>
<p>Note that if you're defining your own values, you can place the brackets around the whole term or just the name:</p>
<pre><code>LIST primeNumbers = (two = 2), (three) = 3, (five = 5)
</code></pre>
<h4><a id="user-content-assiging-multiple-values" class="anchor" aria-hidden="true" href="#assiging-multiple-values"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Assiging multiple values</h4>
<p>We can assign all the values of the list at once as follows:</p>
<pre><code>~ DoctorsInSurgery = (Adams, Bernard)
~ DoctorsInSurgery = (Adams, Bernard, Eamonn)
</code></pre>
<p>We can assign the empty list to clear a list out:</p>
<pre><code>~ DoctorsInSurgery = ()
</code></pre>
<h4><a id="user-content-adding-and-removing-entries" class="anchor" aria-hidden="true" href="#adding-and-removing-entries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding and removing entries</h4>
<p>List entries can be added and removed, singly or collectively.</p>
<pre><code>~ DoctorsInSurgery = DoctorsInSurgery + Adams 	~ DoctorsInSurgery += Adams  // this is the same as the above
~ DoctorsInSurgery -= Eamonn 
~ DoctorsInSurgery += (Eamonn, Denver) 
~ DoctorsInSurgery -= (Adams, Eamonn, Denver)
</code></pre>
<p>Trying to add an entry that's already in the list does nothing. Trying to remove an entry that's not there also does nothing. Neither produces an error, and a list can never contain duplicate entries.</p>
<h3><a id="user-content-basic-queries" class="anchor" aria-hidden="true" href="#basic-queries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Queries</h3>
<p>We have a few basic ways of getting information about what's in a list:</p>
<pre><code>LIST DoctorsInSurgery = (Adams), Bernard, (Cartwright), Denver, Eamonn 

{LIST_COUNT(DoctorsInSurgery)} 	//  "2"
{LIST_MIN(DoctorsInSurgery)} 		//  "Adams"
{LIST_MAX(DoctorsInSurgery)} 		//  "Cartwright"
</code></pre>
<h4><a id="user-content-testing-for-emptiness" class="anchor" aria-hidden="true" href="#testing-for-emptiness"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing for emptiness</h4>
<p>Like most values in ink, a list can be tested "as it is", and will return true, unless it's empty.</p>
<pre><code>{ DoctorsInSurgery: The surgery is open today. | Everyone has gone home. }
</code></pre>
<h4><a id="user-content-testing-for-exact-equality" class="anchor" aria-hidden="true" href="#testing-for-exact-equality"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing for exact equality</h4>
<p>Testing multi-valued lists is slightly more complex than single-valued ones. Equality (<code>==</code>) now means 'set equality' - that is, all entries are identical.</p>
<p>So one might say:</p>
<pre><code>{ DoctorsInSurgery == (Adams, Bernard):
	Dr Adams and Dr Bernard are having a loud argument in one corner.
}
</code></pre>
<p>If Dr Eamonn is in as well, the two won't argue, as the lists being compared won't be equal - DoctorsInSurgery will have an Eamonn that the list (Adams, Bernard) doesn't have.</p>
<p>Not equals works as expected:</p>
<pre><code>{ DoctorsInSurgery != (Adams, Bernard):
	At least Adams and Bernard aren't arguing. 
}
</code></pre>
<h4><a id="user-content-testing-for-containment" class="anchor" aria-hidden="true" href="#testing-for-containment"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing for containment</h4>
<p>What if we just want to simply ask if Adams and Bernard are present? For that we use a new operator, <code>has</code>, otherwise known as <code>?</code>.</p>
<pre><code>{ DoctorsInSurgery ? (Adams, Bernard):
	Dr Adams and Dr Bernard are having a hushed argument in one corner.
}
</code></pre>
<p>And <code>?</code> can apply to single values too:</p>
<pre><code>{ DoctorsInSurgery has Eamonn:
	Dr Eamonn is polishing his glasses.
}
</code></pre>
<p>We can also negate it, with <code>hasnt</code> or <code>!?</code> (not <code>?</code>). Note this starts to get a little complicated as</p>
<pre><code>DoctorsInSurgery !? (Adams, Bernard)
</code></pre>
<p>does not mean neither Adams nor Bernard is present, only that they are not <em>both</em> present (and arguing).</p>
<h4><a id="user-content-example-basic-knowledge-tracking" class="anchor" aria-hidden="true" href="#example-basic-knowledge-tracking"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example: basic knowledge tracking</h4>
<p>The simplest use of a multi-valued list is for tracking "game flags" tidily.</p>
<pre><code>LIST Facts = (Fogg_is_fairly_odd), 	first_name_phileas, (Fogg_is_English)

{Facts ? Fogg_is_fairly_odd:I smiled politely.|I frowned. Was he a lunatic?} 
'{Facts ? first_name_phileas:Phileas|Monsieur}, really!' I cried. 
</code></pre>
<p>In particular, it allows us to test for multiple game flags in a single line.</p>
<pre><code>{ Facts ? (Fogg_is_English, Fogg_is_fairly_odd):  
	&lt;&gt; 'I know Englishmen are strange, but this is *incredible*!' 
}
</code></pre>
<h4><a id="user-content-example-a-doctors-surgery" class="anchor" aria-hidden="true" href="#example-a-doctors-surgery"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example: a doctor's surgery</h4>
<p>We're overdue a fuller example, so here's one.</p>
<pre><code>LIST DoctorsInSurgery = (Adams), Bernard, Cartwright, (Denver), Eamonn 

-&gt; waiting_room

=== function whos_in_today()
	In the surgery today are {DoctorsInSurgery}.
	
=== function doctorEnters(who) 
	{ DoctorsInSurgery !? who:
		~ DoctorsInSurgery += who
		Dr {who} arrives in a fluster.
	}

=== function doctorLeaves(who) 
	{ DoctorsInSurgery ? who:
		~ DoctorsInSurgery -= who
		Dr {who} leaves for lunch.
	}

=== waiting_room
	{whos_in_today()}
	*	[Time passes...] 
		{doctorLeaves(Adams)} {doctorEnters(Cartwright)} {doctorEnters(Eamonn)}
		{whos_in_today()}
</code></pre>
<p>This produces:</p>
<pre><code>In the surgery today are Adams, Denver.

&gt; Time passes...

Dr Adams leaves for lunch. Dr Cartwright arrives in a fluster. Dr Eamonn arrives in a fluster.

In the surgery today are Cartwright, Denver, Eamonn.
</code></pre>
<h4><a id="user-content-advanced-nicer-list-printing" class="anchor" aria-hidden="true" href="#advanced-nicer-list-printing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: nicer list printing</h4>
<p>The basic list print is not especially attractive for use in-game. The following is better:</p>
<pre><code>=== function listWithCommas(list, if_empty) 
    {LIST_COUNT(list): 
    - 2: 
        	{LIST_MIN(list)} and {listWithCommas(list - LIST_MIN(list), if_empty)}
    - 1: 
        	{list}
    - 0: 
			{if_empty}	        
    - else: 
      		{LIST_MIN(list)}, {listWithCommas(list - LIST_MIN(list), if_empty)} 
    }

LIST favouriteDinosaurs = (stegosaurs), brachiosaur, (anklyosaurus), (pleiosaur)

My favourite dinosaurs are {listWithCommas(favouriteDinosaurs, "all extinct")}.
</code></pre>
<p>It's probably also useful to have an is/are function to hand:</p>
<pre><code>=== function isAre(list)
	{LIST_COUNT(list) == 1:is|are}
	
My favourite dinosaurs {isAre(favouriteDinosaurs)} {listWithCommas(favouriteDinosaurs, "all extinct")}.
</code></pre>
<p>And to be pendantic:</p>
<pre><code>My favourite dinosaur{LIST_COUNT(favouriteDinosaurs) != 1:s} {isAre(favouriteDinosaurs)} {listWithCommas(favouriteDinosaurs, "all extinct")}.
</code></pre>
<h4><a id="user-content-lists-dont-need-to-have-multiple-entries" class="anchor" aria-hidden="true" href="#lists-dont-need-to-have-multiple-entries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lists don't need to have multiple entries</h4>
<p>Lists don't <em>have</em> to contain multiple values. If you want to use a list as a state-machine, the examples above will all work - set values using <code>=</code>, <code>++</code> and <code>--</code>; test them using <code>==</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code> and <code>&gt;=</code>. These will all work as expected.</p>
<h3><a id="user-content-the-full-list" class="anchor" aria-hidden="true" href="#the-full-list"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The "full" list</h3>
<p>Note that <code>LIST_COUNT</code>, <code>LIST_MIN</code> and <code>LIST_MAX</code> are refering to who's in/out of the list, not the full set of <em>possible</em> doctors. We can access that using</p>
<pre><code>LIST_ALL(element of list) 
</code></pre>
<p>or</p>
<pre><code>LIST_ALL(list containing elements of a list)

{LIST_ALL(DoctorsInSurgery)} // Adams, Bernard, Cartwright, Denver, Eamonn 
{LIST_COUNT(LIST_ALL(DoctorsInSurgery))} // "5"
{LIST_MIN(LIST_ALL(Eamonn))} 				// "Adams"
</code></pre>
<p>Note that printing a list using <code>{...}</code> produces a bare-bones representation of the list; the values as words, delimited by commas.</p>
<h4><a id="user-content-advanced-refreshing-a-lists-type" class="anchor" aria-hidden="true" href="#advanced-refreshing-a-lists-type"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: "refreshing" a list's type</h4>
<p>If you really need to, you can make an empty list that knows what type of list it is.</p>
<pre><code>LIST ValueList = first_value, second_value, third_value
VAR myList = ()

~ myList = ValueList()
</code></pre>
<p>You'll then be able to do:</p>
<pre><code>{ LIST_ALL(myList) }
</code></pre>
<h4><a id="user-content-advanced-a-portion-of-the-full-list" class="anchor" aria-hidden="true" href="#advanced-a-portion-of-the-full-list"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: a portion of the "full" list</h4>
<p>You can also retrieve just a "slice" of the full list, using the <code>LIST_RANGE</code> function.</p>
<pre><code>LIST_RANGE(list_name, min_value, max_value) 
</code></pre>
<h3><a id="user-content-example-tower-of-hanoi" class="anchor" aria-hidden="true" href="#example-tower-of-hanoi"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example: Tower of Hanoi</h3>
<p>To demonstrate a few of these ideas, here's a functional Tower of Hanoi example, written so no one else has to write it.</p>
<pre><code>LIST Discs = one, two, three, four, five, six, seven
VAR post1 = ()
VAR post2 = ()
VAR post3 = ()

~ post1 = LIST_ALL(Discs)

-&gt; gameloop

=== function can_move(from_list, to_list) ===
    { 
    -   LIST_COUNT(from_list) == 0:
        // no discs to move
        ~ return false
    -   LIST_COUNT(to_list) &gt; 0 &amp;&amp; LIST_MIN(from_list) &gt; LIST_MIN(to_list): 
        // the moving disc is bigger than the smallest of the discs on the new tower 
        ~ return false
    -   else:  
    	 // nothing stands in your way!
        ~ return true
        
    }

=== function move_ring( ref from, ref to ) ===
    ~ temp whichRingToMove = LIST_MIN(from) 
    ~ from -= whichRingToMove
    ~ to += whichRingToMove

== function getListForTower(towerNum) 
    { towerNum:
        - 1:    ~ return post1
        - 2:    ~ return post2 
        - 3:    ~ return post3
    }

=== function name(postNum) 
    the {postToPlace(postNum)} temple
    
=== function Name(postNum) 
    The {postToPlace(postNum)} temple

=== function postToPlace(postNum)
    { postNum: 
        - 1: first
        - 2: second
        - 3: third
    }

=== function describe_pillar(listNum) ==
    ~ temp list = getListForTower(listNum)
    { 
    - LIST_COUNT(list) == 0:
        {Name(listNum)} is empty. 
    - LIST_COUNT(list) == 1:
        The {list} ring lies on {name(listNum)}. 
    - else:
        On {name(listNum)}, are the discs numbered {list}. 
    }
    

=== gameloop 
    Staring down from the heavens you see your followers finishing construction of the last of the great temples, ready to begin the work.
- (top) 
    +  (describe) {true || TURNS_SINCE(-&gt; describe) &gt;= 2 || !describe} [ Regard the temples]
        You regard each of the temples in turn. On each is stacked the rings of stone. {describe_pillar(1)} {describe_pillar(2)} {describe_pillar(3)}
    &lt;- move_post(1, 2, post1, post2)   
    &lt;- move_post(2, 1, post2, post1)  
    &lt;- move_post(1, 3, post1, post3)  
    &lt;- move_post(3, 1, post3, post1)  
    &lt;- move_post(3, 2, post3, post2)  
    &lt;- move_post(2, 3, post2, post3)  
    -&gt; DONE
    
= move_post(from_post_num, to_post_num, ref from_post_list, ref to_post_list) 
    +   { can_move(from_post_list, to_post_list) }
        [ Move a ring from {name(from_post_num)} to {name(to_post_num)} ]
        { move_ring(from_post_list, to_post_list) }
        { stopping:
        -   The priests far below construct a great harness, and after many years of work, the great stone ring is lifted up into the air, and swung over to the next of the temples. 
            The ropes are slashed, and in the blink of an eye it falls once more.
        -   Your next decree is met with a great feast and many sacrifices. After the funeary smoke has cleared, work to shift the great stone ring begins in earnest. A generation grows and falls, and the ring falls into its ordained place. 
        -   {cycle: 
            - Years pass as the ring is slowly moved. 
            - The priests below fight a war over what colour robes to wear, but while they fall and die, the work is still completed. 
            }
        }
    -&gt; top 
</code></pre>
<h2><a id="user-content-5-advanced-list-operations" class="anchor" aria-hidden="true" href="#5-advanced-list-operations"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5) Advanced List Operations</h2>
<p>The above section covers basic comparisons. There are a few more powerful features as well, but - as anyone familiar with mathematical   sets will know - things begin to get a bit fiddly. So this section comes with an 'advanced' warning.</p>
<p>A lot of the features in this section won't be necessary for most games.</p>
<h3><a id="user-content-comparing-lists" class="anchor" aria-hidden="true" href="#comparing-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comparing lists</h3>
<p>We can compare lists less than exactly using <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code> and <code>&lt;=</code>. Be warned! The definitions we use are not exactly standard fare. They are based on comparing the numerical value of the elements in the lists being tested.</p>
<h4><a id="user-content-distinctly-bigger-than" class="anchor" aria-hidden="true" href="#distinctly-bigger-than"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>"Distinctly bigger than"</h4>
<p><code>LIST_A &gt; LIST_B</code> means "the smallest value in A is bigger than the largest values in B": in other words, if put on a number line, the entirety of A is to the right of the entirety of B. <code>&lt;</code> does the same in reverse.</p>
<h4><a id="user-content-definitely-never-smaller-than" class="anchor" aria-hidden="true" href="#definitely-never-smaller-than"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>"Definitely never smaller than"</h4>
<p><code>LIST_A &gt;= LIST_B</code> means - take a deep breath now - "the smallest value in A is at least the smallest value in B, and the largest value in A is at least the largest value in B". That is, if drawn on a number line, the entirety of A is either above B or overlaps with it, but B does not extend higher than A.</p>
<p>Note that <code>LIST_A &gt; LIST_B</code> implies <code>LIST_A != LIST_B</code>, and <code>LIST_A &gt;= LIST_B</code> allows <code>LIST_A == LIST_B</code> but precludes <code>LIST_A &lt; LIST_B</code>, as you might hope.</p>
<h4><a id="user-content-health-warning" class="anchor" aria-hidden="true" href="#health-warning"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Health warning!</h4>
<p><code>LIST_A &gt;= LIST_B</code> is <em>not</em> the same as <code>LIST_A &gt; LIST_B or LIST_A == LIST_B</code>.</p>
<p>The moral is, don't use these unless you have a clear picture in your mind.</p>
<h3><a id="user-content-inverting-lists" class="anchor" aria-hidden="true" href="#inverting-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Inverting lists</h3>
<p>A list can be "inverted", which is the equivalent of going through the accommodation in/out name-board and flipping every switch to the opposite of what it was before.</p>
<pre><code>LIST GuardsOnDuty = (Smith), (Jones), Carter, Braithwaite

=== function changingOfTheGuard 
	~ GuardsOnDuty = LIST_INVERT(GuardsOnDuty)
</code></pre>
<p>Note that <code>LIST_INVERT</code> on an empty list will return a null value, if the game doesn't have enough context to know what invert. If you need to handle that case, it's safest to do it by hand:</p>
<pre><code>=== function changingOfTheGuard 
	{!GuardsOnDuty: // "is GuardsOnDuty empty right now?"
		~ GuardsOnDuty = LIST_ALL(Smith)
	- else:
		~ GuardsOnDuty = LIST_INVERT(GuardsOnDuty)
	}
</code></pre>
<h4><a id="user-content-footnote" class="anchor" aria-hidden="true" href="#footnote"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Footnote</h4>
<p>The syntax for inversion was originally <code>~ list</code> but we changed it because otherwise the line</p>
<pre><code>~ list = ~ list 
</code></pre>
<p>was not only functional, but actually caused list to invert itself, which seemed excessively perverse.</p>
<h3><a id="user-content-intersecting-lists" class="anchor" aria-hidden="true" href="#intersecting-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Intersecting lists</h3>
<p>The <code>has</code> or <code>?</code> operator is, somewhat more formally, the "are you a subset of me" operator, ⊇, which includes the sets being equal, but which doesn't include if the larger set doesn't entirely contain the smaller set.</p>
<p>To test for "some overlap" between lists, we use the overlap operator, <code>^</code>, to get the <em>intersection</em>.</p>
<pre><code>LIST CoreValues = strength, courage, compassion, greed, nepotism, self_belief, delusions_of_godhood
VAR desiredValues = (strength, courage, compassion, self_belief )
VAR actualValues =  ( greed, nepotism, self_belief, delusions_of_godhood )

{desiredValues ^ actualValues} // prints "self_belief"  
</code></pre>
<p>The result is a new list, so you can test it:</p>
<pre><code>{desiredValues ^ actualValues: The new president has at least one desirable quality.} 

{LIST_COUNT(desiredValues ^ actualValues) == 1: Correction, the new president has only one desirable quality. {desiredValues ^ actualValues == self_belief: It's the scary one.}}
</code></pre>
<h2><a id="user-content-6-multi-list-lists" class="anchor" aria-hidden="true" href="#6-multi-list-lists"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6) Multi-list Lists</h2>
<p>So far, all of our examples have included one large simplification, again - that the values in a list variable have to all be from the same list family. But they don't.</p>
<p>This allows us to use lists - which have so far played the role of state-machines and flag-trackers - to also act as general properties, which is useful for world modelling.</p>
<p>This is our inception moment. The results are powerful, but also more like "real code" than anything that's come before.</p>
<h3><a id="user-content-lists-to-track-objects" class="anchor" aria-hidden="true" href="#lists-to-track-objects"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lists to track objects</h3>
<p>For instance, we might define:</p>
<pre><code>LIST Characters = Alfred, Batman, Robin 
LIST Props = champagne_glass, newspaper 

VAR BallroomContents = (Alfred, Batman, newspaper) 
VAR HallwayContents = (Robin, champagne_glass) 
</code></pre>
<p>We could then describe the contents of any room by testing its state:</p>
<pre><code>=== function describe_room(roomState)
	{ roomState ? Alfred: Alfred is here, standing quietly in a corner. } { roomState ? Batman: Batman's presence dominates all. } { roomState ? Robin: Robin is all but forgotten. }
	&lt;&gt; { roomState ? champagne_glass: A champagne glass lies discarded on the floor. } { roomState ? newspaper: On one table, a headline blares out WHO IS THE BATMAN? AND *WHO* IS HIS BARELY-REMEMBERED ASSISTANT? }
</code></pre>
<p>So then:</p>
<pre><code>{ describe_room(BallroomContents) } 
</code></pre>
<p>produces:</p>
<pre><code>Alfred is here, standing quietly in a corner. Batman's presence dominates all.

On one table, a headline blares out WHO IS THE BATMAN? AND *WHO* IS HIS BARELY-REMEMBERED ASSISTANT?
</code></pre>
<p>While:</p>
<pre><code>{ describe_room(HallwayContents) } 
</code></pre>
<p>gives:</p>
<pre><code>Robin is all but forgotten.

A champagne glass lies discarded on the floor.
</code></pre>
<p>And we could have options based on combinations of things:</p>
<pre><code>*	{ currentRoomState ? (Batman, Alfred) } [Talk to Alfred and Batman] 
	'Say, do you two know each other?' 
</code></pre>
<h3><a id="user-content-lists-to-track-multiple-states" class="anchor" aria-hidden="true" href="#lists-to-track-multiple-states"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lists to track multiple states</h3>
<p>We can model devices with multiple states. Back to the kettle again...</p>
<pre><code>LIST OnOff = on, off 
LIST HotCold = cold, warm, hot 

VAR kettleState = off, cold 

=== function turnOnKettle() ===
{ kettleState ? hot:
	You turn on the kettle, but it immediately flips off again. 
- else: 
	The water in the kettle begins to heat up.
	~ kettleState -= off
	~ kettleState += on 
	// note we avoid "=" as it'll remove all existing states
}

=== function can_make_tea() ===
	~ return kettleState ? (hot, off)
</code></pre>
<p>These mixed states can make changing state a bit trickier, as the off/on above demonstrates, so the following helper function can be useful.</p>
<pre><code>=== function changeStateTo(ref stateVariable, stateToReach)
	// remove all states of this type
	~ stateVariable -= LIST_ALL(stateToReach)
	// put back the state we want
	~ stateVariable += stateToReach
</code></pre>
<p>which enables code like:</p>
<pre><code>~ changeState(kettleState, on)
~ changeState(kettleState, warm)
</code></pre>
<h4><a id="user-content-how-does-this-affect-queries" class="anchor" aria-hidden="true" href="#how-does-this-affect-queries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How does this affect queries?</h4>
<p>The queries given above mostly generalise nicely to multi-valued lists</p>
<pre><code>LIST Letters = a,b,c 
LIST Numbers = one, two, three 

VAR mixedList = (a, three, c)

{LIST_ALL(mixedList)}   // a, one, b, two, c, three
{LIST_COUNT(mixedList)} // 3 
{LIST_MIN(mixedList)}   // a
{LIST_MAX(mixedList)}   // three or c, albeit unpredictably

{mixedList ? (a,b) }        // false 
{mixedList ^ LIST_ALL(a)}   // a, c

{ mixedList &gt;= (one, a) }   // true 
{ mixedList &lt; (three) }     // false 

{ LIST_INVERT(mixedList) }            // one, b, two	
</code></pre>
<h2><a id="user-content-7-long-example-crime-scene" class="anchor" aria-hidden="true" href="#7-long-example-crime-scene"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7) Long example: crime scene</h2>
<p>Finally, here's a long example, demonstrating a lot of ideas from this section in action. You might want to try playing it before reading through to better understand the various moving parts.</p>
<pre><code>-&gt; murder_scene 

//
// 	System: items can have various states 
//	Some are general, some specific to particular items
//

LIST OffOn = off, on
LIST SeenUnseen = unseen, seen

LIST GlassState = (none), steamed, steam_gone 
LIST BedState = (made_up), covers_shifted, covers_off, stain_visible

//
// System: inventory
//

LIST Inventory = (none), cane, knife

=== function get(x) 
    ~ Inventory += x

//
// System: positioning things 
// Items can be put in and on places
// 

LIST Supporters = on_desk, on_floor, on_bed, under_bed, held, with_joe

=== function move_to_supporter(ref item_state, new_supporter) ===
    ~ item_state -= LIST_ALL(Supporters)
    ~ item_state += new_supporter

//
// System: Incremental knowledge. 
// Each list is a chains of facts. Each fact supercedes the fact before it. 
//


LIST BedKnowledge = (none), neatly_made, crumpled_duvet, hastily_remade, body_on_bed, murdered_in_bed, murdered_while_asleep
LIST KnifeKnowledge = (none), prints_on_knife, joe_seen_prints_on_knife,joe_wants_better_prints, joe_got_better_prints
LIST WindowKnowledge = (none), steam_on_glass, fingerprints_on_glass, fingerprints_on_glass_match_knife

VAR knowledgeState = ()

=== function learn(x) ===
	// learn this fact
    ~ knowledgeState += x 

=== function learnt(x) ===
	// have you learnt this fact, or indeed a stronger one
    ~ return highest_state_for_set_of_state(x) &gt;= x

=== function between(x, y) ===
	// are you between two ideas? Not necessarily in the same knowledge tree.
    ~ return learnt(x) &amp;&amp; not learnt(y)

=== function think(x) ===
	// is this your current "strongest" idea in this knowledge set?
    ~ return highest_state_for_set_of_state(x) == x

=== function highest_state_for_set_of_state(x) ===
    ~ return LIST_MAX(knowledgeState ^ LIST_ALL(x))

=== function did_learn(x) ===
	//	did you learn this particular fact?
    ~ return knowledgeState ? x

//
// Set up the scene 
//

VAR bedroomLightState = (off, on_desk)
VAR knifeState = (under_bed)

//
// Content
//

=== murder_scene ===
    The bedroom. This is where it happened. Now to look for clues.
- (top) 
    { bedroomLightState ? seen:     &lt;- seen_light  }
    &lt;- compare_prints(-&gt; top)
    
    *   (dobed) [The bed...]
        The bed was low to the ground, but not so low something might not roll underneath. It was still neatly made. 
        ~ learn(neatly_made)
        - - (bedhub)
        * *     [Lift the bedcover]
                I lifted back the bedcover. The duvet underneath was crumpled. 
                ~ learn(crumpled_duvet)
                ~ BedState = covers_shifted
        * *     (uncover) {learnt(crumpled_duvet)} 
                [Remove the cover] 
                Careful not to disturb anything beneath, I removed the cover entirely. The duvet below was rumpled. 
                Not the work of the maid, who was conscientious to a point. Clearly this had been thrown on in a hurry. 
                ~ learn(hastily_remade)
                ~ BedState = covers_off
        * *     (duvet) {BedState == covers_off} [ Pull back the duvet ] 
                I pulled back the duvet. Beneath it was a sheet, sticky with blood. 
                ~ BedState = stain_visible
                ~ learn(body_on_bed) 
                Either the body had been moved here before being dragged to the floor - or this is was where the murder had taken place. 
        * *     {!(BedState ? made_up)} [ Remake the bed ]
                Carefully, I pulled the bedsheets back into place, trying to make it seem undisturbed. 
                ~ BedState = made_up
        * *     [Test the bed] 
                I pushed the bed with spread fingers. It creaked a little, but not so much as to be obnoxious.
        * *     (darkunder) [Look under the bed] 
                Lying down, I peered under the bed, but could make nothing out. 
         
        * *     {TURNS_SINCE(-&gt; dobed) &gt; 1} [Something else?] 
                I took a step back from the bed and looked around.
                -&gt; top 
        - -     -&gt; bedhub
    
    *   {darkunder &amp;&amp; bedroomLightState ? on_floor &amp;&amp; bedroomLightState ? on} 
        [ Look under the bed ] 
        I peered under the bed. Something glinted back at me. 
        - - (reaching)
        * *     [ Reach for it ] 
                I fished with one arm under the bed, but whatever it was, it had been kicked far enough back that I couldn't get my fingers on it. 
                -&gt; reaching
        * *     {Inventory ? cane} [Knock it with the cane] 
                -&gt; knock_with_cane
                
        * *     {reaching &gt; 1 } [ Stand up ] 
                I stood up once more, and brushed my coat down. 
                -&gt; top 
                
    *   (knock_with_cane) {reaching &amp;&amp; TURNS_SINCE(-&gt; reaching) &gt;= 4 &amp;&amp;  Inventory ? cane } [Use the cane to reach under the bed ]
        Positioning the cane above the carpet, I gave the glinting thing a sharp tap. It slid out from the under the foot of the bed. 
        ~ move_to_supporter( knifeState, on_floor ) 
        * *     (standup) [Stand up] 
                Satisfied, I stood up, and saw I had knocked free a bloodied knife. 
                -&gt; top 
        * *     [Look under the bed once more] 
                Moving the cane aside, I looked under the bed once more, but there was nothing more there. 
                -&gt; standup        
                
    *   {knifeState ? on_floor} [Pick up the knife]
        Careful not to touch the handle, I lifted the blade from the carpet. 
        ~ get(knife)
        
    *   {Inventory ? knife} [Look at the knife]
        The blood was dry enough. Dry enough to show up partial prints on the hilt!
        ~ learn(prints_on_knife)
        
    *   [   The desk... ] 
        I turned my attention to the desk. A lamp sat in one corner, a neat, empty in-tray in the other. There was nothing else out.
        Leaning against the desk was a wooden cane.
        ~ bedroomLightState += seen 
        - - (deskstate) 
        * *     (pickup_cane) {Inventory !? cane}    [Pick up the cane ]
                ~ get(cane) 
                I picked up the wooden cane. It was heavy, and unmarked. 
        
        * *    { bedroomLightState !? on } [Turn on the lamp] 
                -&gt; operate_lamp -&gt; 
        * *     [Look at the in-tray ] 
                I regarded the in-tray, but there was nothing to be seen. Either the victim's papers were taken, or his line of work had seriously dried up. Or the in-tray was all for show. 
        + +     (open)  {open &lt; 3} [Open a drawer] 
                I tried {a drawer at random|another drawer|a third drawer}. {Locked|Also locked|Unsurprisingly, locked as well}. 
        
        * *     {deskstate &gt;= 2} [Something else?] 
                I took a step away from the desk once more. 
                -&gt; top 
        - -     -&gt; deskstate
   
    *     {(Inventory ? cane) &amp;&amp; TURNS_SINCE(-&gt; deskstate) &lt;= 2} [Swoosh the cane]    
        I was still holding the cane: I gave it an experimental swoosh. It was heavy indeed, though not heavy enough to be used as a bludgeon. 
        But it might have been useful in self-defence. Why hadn't the victim reached for it? Knocked it over?
       
    *   [The window...] 
        I went over to the window and peered out. A dismal view of the little brook that ran down beside the house. 
        - - (window_opts)
        &lt;- compare_prints(-&gt; window_opts)
        * *     (downy) [Look down at the brook] 
                { GlassState ? steamed:
                    Through the steamed glass I couldn't see the brook. -&gt; see_prints_on_glass -&gt; window_opts 
                }
                I watched the little stream rush past for a while. The house probably had damp but otherwise, it told me nothing.
        * *     (greasy) [Look at the glass] 
                { GlassState ? steamed: -&gt; downy }
                The glass in the window was greasy. No one had cleaned it in a while, inside or out. 
        * *     { GlassState ? steamed &amp;&amp; not see_prints_on_glass &amp;&amp; downy &amp;&amp; greasy } 
                [ Look at the steam ] 
                A cold day outside. Natural my breath should steam. -&gt; see_prints_on_glass -&gt; 
        + +     {GlassState ? steam_gone} [ Breathe on the glass ]
                I breathed gently on the glass once more. {learnt(fingerprints_on_glass): The fingerprints reappeared. }
                ~ GlassState = steamed
       
        + +     [Something else?] 
                { window_opts &lt; 2 || learnt(fingerprints_on_glass) || GlassState ? steamed:
                    I looked away from the dreary glass. 
                    {GlassState ? steamed: 
                        ~ GlassState = steam_gone
                        &lt;&gt; The steam from my breath faded.
                    }
                    -&gt; top 
                }
                I leant back from the glass. My breath had steamed up the pane a little. 
               ~ GlassState = steamed
        - -     -&gt; window_opts
    
    
        
    *   {top &gt;= 5} [Leave the room] 
        I'd seen enough. I {bedroomLightState ? on:switched off the lamp, then} turned and left the room.
        -&gt; joe_in_hall
    -   -&gt; top 
    
= see_prints_on_glass
    ~ learn(fingerprints_on_glass)
    {But I could see a few fingerprints, as though someone had leant their palm against it.|The fingerprints were quite clear and well-formed.} They faded as I watched.   
    ~ GlassState = steam_gone 
    -&gt;-&gt; 
    
= compare_prints (-&gt; backto)
    *   {learnt(fingerprints_on_glass) &amp;&amp; learnt(prints_on_knife) &amp;&amp; !learnt(fingerprints_on_glass_match_knife)} [Compare the prints on the knife and the window ]    
        Holding the bloodied knife near the window, I breathed to bring out the prints once more, and compared them as best I could. 
        Hardly scientific, but they seemed very similar - very similiar indeed. 
        ~ learn(fingerprints_on_glass_match_knife)
        -&gt; backto
        
= operate_lamp 
    I flicked the light switch. 
    { bedroomLightState ? on:
        &lt;&gt; The bulb fell dark. 
        ~ bedroomLightState += off
        ~ bedroomLightState -= on 
    - else:
        { bedroomLightState ? on_floor: &lt;&gt; A little light spilled under the bed.} { bedroomLightState ? on_desk : &lt;&gt; The light gleamed on the polished tabletop. } 
        ~ bedroomLightState -= off
        ~ bedroomLightState += on 
    }
    -&gt;-&gt;
                    
= seen_light  
    *   {!(bedroomLightState ? on)} [ Turn on lamp ]
        -&gt; operate_lamp -&gt; 
    
    *   { !(bedroomLightState ? on_bed)  &amp;&amp; BedState ? stain_visible }
        [ Move the light to the bed ] 
        ~ move_to_supporter(bedroomLightState, on_bed)
        I moved the light over to the bloodstain and peered closely at it. It had soaked deeply into the fibres of the cotton sheet. 
        There was no doubt about it. This was where the blow had been struck. 
        ~ learn(murdered_in_bed) 
        
    *   { !(bedroomLightState ? on_desk) } {TURNS_SINCE(-&gt; floorit) &gt;= 2 }
        [ Move the light back to the desk ] 
        ~ move_to_supporter(bedroomLightState, on_desk)
        I moved the light back to the desk, setting it down where it had originally been. 
    *   (floorit) { !(bedroomLightState ? on_floor) &amp;&amp; darkunder } 
        [Move the light to the floor ] 
        ~ move_to_supporter(bedroomLightState, on_floor)
        I picked the light up and set it down on the floor. 
    -   -&gt; top 
    
=== joe_in_hall
    My police contact, Joe, was waiting in the hall. 'So?' he demanded. 'Did you find anything interesting?' 
- (found)
    *   {found == 1} 'Nothing.' 
        He shrugged. 'Shame.' 
        -&gt; done
    *   { Inventory ? knife } 'I found the murder weapon.' 
        'Good going!' Joe replied with a grin. 'We thought the murderer had gotten rid of it. I'll bag that for you now.'
        ~ move_to_supporter(knifeState, with_joe)
    *   {learnt(prints_on_knife)} { knifeState ? with_joe }
        'There are prints on the blade[.'],' I told him. 
        He regarded them carefully. 
        'Hrm. Not very complete. It'll be hard to get a match from these.'
        ~ learn(joe_seen_prints_on_knife)
    *   { learnt(fingerprints_on_glass_match_knife) &amp;&amp; learnt(joe_seen_prints_on_knife) } 
        'They match a set of prints on the window, too.'
        'Anyone could have touched the window,' Joe replied thoughtfully. 'But if they're more complete, they should help us get a decent match!' 
        ~ learn(joe_wants_better_prints)
    *   { between(body_on_bed, murdered_in_bed)} 
        'The body was moved to the bed at some point[.'],' I told him. 'And then moved back to the floor.' 
        'Why?' 
        * *     'I don't know.' 
                Joe nods. 'All right.'
        * *     'Perhaps to get something from the floor?' 
                'You wouldn't move a whole body for that.' 
        * *     'Perhaps he was killed in bed.' 
                'It's just speculation at this point,' Joe remarks.
    *   { learnt(murdered_in_bed) } 
        'The victim was murdered in bed, and then the body was moved to the floor.' 
        'Why?'
        * *     'I don't know.' 
                Joe nods. 'All right, then.'
        * *     'Perhaps the murderer wanted to mislead us.' 
                'How so?' 
            * * *   'They wanted us to think the victim was awake[.'], I replied thoughtfully. 'That they were meeting their attacker, rather than being stabbed in their sleep.'
            * * *   'They wanted us to think there was some kind of struggle[.'],' I replied. 'That the victim wasn't simply stabbed in their sleep.' 
            - - -   'But if they were killed in bed, that's most likely what happened. Stabbed, while sleeping.' 
                    ~ learn(murdered_while_asleep) 
        * *     'Perhaps the murderer hoped to clean up the scene.' 
                'But they were disturbed? It's possible.'
                
                
    *   { found &gt; 1} 'That's it.' 
        'All right. It's a start,' Joe replied.
        -&gt; done
    -   -&gt; found
-   (done)
    {
    - between(joe_wants_better_prints, joe_got_better_prints):
        ~ learn(joe_got_better_prints)
        &lt;&gt;  He moved for the door.  'I'll get those prints from the window now.'
    - learnt(joe_seen_prints_on_knife):
        &lt;&gt; 'I'll run those prints as best I can.'
    - else:
        &lt;&gt; 'Not much to go on.'
    }
    -&gt; END
</code></pre>
<h2><a id="user-content-8-summary" class="anchor" aria-hidden="true" href="#8-summary"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>8) Summary</h2>
<p>To summarise a difficult section, <strong>ink</strong>'s list construction provides:</p>
<h3><a id="user-content-flags" class="anchor" aria-hidden="true" href="#flags"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flags</h3>
<ul>
<li>Each list entry is an event</li>
<li>Use <code>+=</code> to mark an event as having occurred</li>
<li>Test using <code>?</code> and <code>!?</code></li>
</ul>
<p>Example:</p>
<pre><code>LIST GameEvents = foundSword, openedCasket, metGorgon 
{ GameEvents ? openedCasket }
{ GameEvents ? (foundSword, metGorgon) }
~ GameEvents += metGorgon
</code></pre>
<h3><a id="user-content-state-machines" class="anchor" aria-hidden="true" href="#state-machines"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>State machines</h3>
<ul>
<li>Each list entry is a state</li>
<li>Use <code>=</code> to set the state; <code>++</code> and <code>--</code> to step forward or backward</li>
<li>Test using <code>==</code>, <code>&gt;</code> etc</li>
</ul>
<p>Example:</p>
<pre><code>LIST PancakeState = ingredients_gathered, batter_mix, pan_hot, pancakes_tossed, ready_to_eat 
{ PancakeState == batter_mix }
{ PancakeState &lt; ready_to_eat }
~ PancakeState++
</code></pre>
<h3><a id="user-content-properties" class="anchor" aria-hidden="true" href="#properties"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Properties</h3>
<ul>
<li>Each list is a different property, with values for the states that property can take (on or off, lit or unlit, etc)</li>
<li>Change state by removing the old state, then adding in the new</li>
<li>Test using <code>?</code> and <code>!?</code></li>
</ul>
<p>Example:</p>
<pre><code>LIST OnOffState = on, off 
LIST ChargeState = uncharged, charging, charged

VAR PhoneState = (off, uncharged)

*	{PhoneState !? uncharged } [Plug in phone]
	~ PhoneState -= LIST_ALL(ChargeState)
	~ PhoneState += charging
	You plug the phone into charge.
*	{ PhoneState ? (on, charged) } [ Call my mother ]
</code></pre>
<h1><a id="user-content-part-6-international-character-support-in-identifiers" class="anchor" aria-hidden="true" href="#part-6-international-character-support-in-identifiers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Part 6: International character support in identifiers</h1>
<p>By default, ink has no limitations on the use of non-ASCII characters inside the story content. However, a limitation currently exsits
on the characters that can be used for names of constants, variables, stictches, diverts and other named flow elements (a.k.a. <em>identifiers</em>).</p>
<p>Sometimes it is inconvenient for a writer using a non-ASCII language to write a story because they have to constantly switch to naming identifiers in ASCII and then switching back to whatever language they are using for the story. In addition, naming identifiers in the author's own language could improve the overal readibility of the raw story format.</p>
<p>In an effort to assist in the above scenario, ink <em>automatically</em> supports a list of pre-defined non-ASCII character ranges that can be used as identifiers. In general, those ranges have been selected to include the alpha-numeric subset of the official unicode character range, which would suffice for naming identifiers. The below section gives more detailed information on the non-ASCII characters that ink automatically supports.</p>
<h3><a id="user-content-supported-identifier-characters" class="anchor" aria-hidden="true" href="#supported-identifier-characters"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Supported Identifier Characters</h3>
<p>The support for the additional character ranges in ink is currently limited to a predefined set of character ranges.</p>
<p>Below is a listing of the currently supported identifier ranges.</p>
<ul>
<li>
<p><strong>Arabic</strong></p>
<p>Enables characters for languages of the Arabic family and is a subset of the official <em>Arabic</em> unicode range <code>\u0600</code>-<code>\u06FF</code>.</p>
</li>
<li>
<p><strong>Armenian</strong></p>
<p>Enables characters for the Armenian language and is a subset of the official <em>Armenian</em> unicode range <code>\u0530</code>-<code>\u058F</code>.</p>
</li>
<li>
<p><strong>Cyrillic</strong></p>
<p>Enables characters for languages using the Cyrillic alphabet and is a subset of the official <em>Cyrillic</em> unicode range <code>\u0400</code>-<code>\u04FF</code>.</p>
</li>
<li>
<p><strong>Greek</strong></p>
<p>Enables characters for languages using the Greek alphabet and is a subset of the official <em>Greek and Coptic</em> unicode range <code>\u0370</code>-<code>\u03FF</code>.</p>
</li>
<li>
<p><strong>Hebrew</strong></p>
<p>Enables characters in Hebrew using the Hebrew alphabet and is a subset of the official <em>Hebrew</em> unicode range <code>\u0590</code>-<code>\u05FF</code>.</p>
</li>
<li>
<p><strong>Latin Extended A</strong></p>
<p>Enables an extended character range subset of the Latin alphabet - completely represented by the official <em>Latin Extended-A</em> unicode range <code>\u0100</code>-<code>\u017F</code>.</p>
</li>
<li>
<p><strong>Latin Extended B</strong></p>
<p>Enables an extended character range subset of the Latin alphabet - completely represented by the official <em>Latin Extended-B</em> unicode range <code>\u0180</code>-<code>\u024F</code>.</p>
</li>
</ul>
<p><strong>NOTE!</strong> ink files should be saved in UTF-8 format, which ensures that the above character ranges are supported.</p>
<p>If a particular character range that you would like to use within identifiers isn't supported, feel free to open an <a href="https://github.com/inkle/ink/issues/new">issue</a> or <a href="https://github.com/inkle/ink/pulls">pull request</a> on the main ink repo.</p>
</article>
  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.25629s from unicorn-775f674db4-ckc77">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-H2b2rXQmQcnMZW2c0jxXEFTC+Ti5C07rPW0m+08k7kQXiKOojgrV7IFxrbcbTvl+3nyJaBpvAhUL5rVm6tZV+g==" type="application/javascript" src="https://assets-cdn.github.com/assets/unsupported-293e8a87407203524f09825549bebca7.js"></script>
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

