import{_ as a,c as o,a0 as r,o as t}from"./chunks/framework.DEE5K0yY.js";const i="/encore/Screenshot_20241011-095035_KernelSU.png",p=JSON.parse('{"title":"How to configure","description":"How to configure Encore Tweaks through Module WebUI","frontmatter":{"title":"How to configure","description":"How to configure Encore Tweaks through Module WebUI"},"headers":[],"relativePath":"guide/webui-and-configuration.md","filePath":"guide/webui-and-configuration.md"}'),n={name:"guide/webui-and-configuration.md"};function l(s,e,d,c,u,h){return t(),o("div",null,e[0]||(e[0]=[r('<h1 id="module-webui-and-configuration" tabindex="-1">Module WebUI and Configuration <a class="header-anchor" href="#module-webui-and-configuration" aria-label="Permalink to &quot;Module WebUI and Configuration&quot;">​</a></h1><p>Encore Tweaks exposes some settings and utilities inside <a href="https://kernelsu.org/guide/module-webui.html" target="_blank" rel="noreferrer">Module WebUI</a>, a KernelSU feature that allows modules to write HTML + CSS + JavaScript pages through any web technology and displaying UI interfaces and interacting with users.</p><p>While KernelSU and APatch can use WebUI natively on their manager, Magisk doesn&#39;t implement webroot on their manager and you need to use <a href="https://t.me/rem01schannel/636" target="_blank" rel="noreferrer">this app</a> to order to use WebUI in Magisk.</p><details class="details custom-block"><summary>Encore&#39;s WebUI Preview</summary><p><img src="'+i+'" alt="Encore Tweaks Module WebUI"></p></details><h2 id="kill-logd" tabindex="-1">Kill Logd <a class="header-anchor" href="#kill-logd" aria-label="Permalink to &quot;Kill Logd&quot;">​</a></h2><p>As name suggests, this will stop logd service which is logging system in Android. enabling this will help reduce performance overhead.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Do NOT enable this if you&#39;re going to test ROMs and Apps, this will literally silence your Android logging system !</p></div><h2 id="default-cpu-governor" tabindex="-1">Default CPU Governor <a class="header-anchor" href="#default-cpu-governor" aria-label="Permalink to &quot;Default CPU Governor&quot;">​</a></h2><p>CPU Governor that will used in Normal and Powersave profile.</p><h2 id="performance-profile-cpu-gov" tabindex="-1">Performance profile CPU Gov <a class="header-anchor" href="#performance-profile-cpu-gov" aria-label="Permalink to &quot;Performance profile CPU Gov&quot;">​</a></h2><p>CPU Governor that will used in Performance profile.</p><h2 id="edit-gamelist" tabindex="-1">Edit Gamelist <a class="header-anchor" href="#edit-gamelist" aria-label="Permalink to &quot;Edit Gamelist&quot;">​</a></h2><p>Edit game and other performance intensive apps that will trigger Performance profile.</p><h2 id="save-logs" tabindex="-1">Save Logs <a class="header-anchor" href="#save-logs" aria-label="Permalink to &quot;Save Logs&quot;">​</a></h2><p>Save <code>encore-service</code> logs into internal storage, more precisely <code>/sdcard/encore_log</code>.</p><h2 id="restart-service" tabindex="-1">Restart Service <a class="header-anchor" href="#restart-service" aria-label="Permalink to &quot;Restart Service&quot;">​</a></h2><p>Restart fresh <code>encore-service</code>.</p>',17)]))}const m=a(n,[["render",l]]);export{p as __pageData,m as default};
