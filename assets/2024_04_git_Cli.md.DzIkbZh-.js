import{_ as n,c as a,a3 as p,o as l}from"./chunks/framework.VX8o9GSp.js";const g=JSON.parse('{"title":"git 命令手册","description":"","frontmatter":{"prev":false,"next":false,"date":"2024-04-08T00:00:00.000Z","tags":["git"],"categories":["计算机"]},"headers":[],"relativePath":"2024/04/git_Cli.md","filePath":"2024/04/git_Cli.md","lastUpdated":1732529046000}'),e={name:"2024/04/git_Cli.md"};function i(r,s,c,b,t,m){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="git-命令手册" tabindex="-1">git 命令手册 <a class="header-anchor" href="#git-命令手册" aria-label="Permalink to &quot;git 命令手册&quot;">​</a></h1><h2 id="常用语句" tabindex="-1">常用语句 <a class="header-anchor" href="#常用语句" aria-label="Permalink to &quot;常用语句&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>== 初始化本地git仓库（创建新仓库）</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 配置用户名</span></span>
<span class="line"><span>git config --global user.name &quot;xxx&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 配置邮件</span></span>
<span class="line"><span>git config --global user.email &quot;xxx@xxx.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== git status等命令自动着色</span></span>
<span class="line"><span>git config --global color.ui true</span></span>
<span class="line"><span>git config --global color.status auto</span></span>
<span class="line"><span>git config --global color.diff auto</span></span>
<span class="line"><span>git config --global color.branch auto</span></span>
<span class="line"><span>git config --global color.interactive auto</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== remove proxy configuration on git</span></span>
<span class="line"><span>git config --global --unset http.proxy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== clone远程仓库</span></span>
<span class="line"><span>git clone git+ssh://git@192.168.53.168/VT.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 查看当前版本状态（是否修改）</span></span>
<span class="line"><span>git status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 添加xyz文件至index</span></span>
<span class="line"><span>git add xyz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 增加当前子目录下所有更改过的文件至index</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 提交</span></span>
<span class="line"><span>git commit -m &#39;xxx&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 合并上一次提交（用于反复修改）</span></span>
<span class="line"><span>git commit --amend -m &#39;xxx&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 将add和commit合为一步</span></span>
<span class="line"><span>git commit -am &#39;xxx&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 删除index中的文件</span></span>
<span class="line"><span>git rm xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 递归删除</span></span>
<span class="line"><span>git rm -r *</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示提交日志</span></span>
<span class="line"><span>git log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示1行日志 -n为n行</span></span>
<span class="line"><span>git log -1</span></span>
<span class="line"><span>git log -5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示提交日志及相关变动文件</span></span>
<span class="line"><span>git log --stat</span></span>
<span class="line"><span>git log -p -m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示某个提交的详细内容</span></span>
<span class="line"><span>git show dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 可只用commitid的前几位</span></span>
<span class="line"><span>git show dfb02</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示HEAD提交日志</span></span>
<span class="line"><span>git show HEAD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本</span></span>
<span class="line"><span>git show HEAD^</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示已存在的tag</span></span>
<span class="line"><span>git tag</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 增加v2.0的tag</span></span>
<span class="line"><span>git tag -a v2.0 -m &#39;xxx&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示v2.0的日志及详细内容</span></span>
<span class="line"><span>git show v2.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示v2.0的日志</span></span>
<span class="line"><span>git log v2.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示所有未添加至index的变更</span></span>
<span class="line"><span>git diff</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示所有已添加index但还未commit的变更</span></span>
<span class="line"><span>git diff --cached</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 比较与上一个版本的差异</span></span>
<span class="line"><span>git diff HEAD^</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 比较与HEAD版本lib目录的差异</span></span>
<span class="line"><span>git diff HEAD -- ./lib</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 比较远程分支master上有本地分支master上没有的</span></span>
<span class="line"><span>git diff origin/master..master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 只显示差异的文件，不显示具体内容</span></span>
<span class="line"><span>git diff origin/master..master --stat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 增加远程定义（用于push/pull/fetch）</span></span>
<span class="line"><span>git remote add origin git+ssh://git@192.168.53.168/VT.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示本地分支</span></span>
<span class="line"><span>git branch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示包含提交50089的分支</span></span>
<span class="line"><span>git branch --contains 50089</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示所有分支</span></span>
<span class="line"><span>git branch -a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示所有原创分支</span></span>
<span class="line"><span>git branch -r</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示所有已合并到当前分支的分支</span></span>
<span class="line"><span>git branch --merged</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示所有未合并到当前分支的分支</span></span>
<span class="line"><span>git branch --no-merged</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 本地分支改名</span></span>
<span class="line"><span>git branch -m master master_copy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 从当前分支创建新分支master_copy并检出</span></span>
<span class="line"><span>git checkout -b master_copy</span></span>
<span class="line"><span>git checkout -b master master_copy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 检出已存在的features/performance分支</span></span>
<span class="line"><span>git checkout features/performance</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支</span></span>
<span class="line"><span>git checkout --track hotfixes/BJVEP933</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 检出版本v2.0</span></span>
<span class="line"><span>git checkout v2.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 从远程分支develop创建新本地分支devel并检出</span></span>
<span class="line"><span>git checkout -b devel origin/develop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 检出head版本的README文件（可用于修改错误回退）</span></span>
<span class="line"><span>git checkout -- README</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 合并远程master分支至当前分支</span></span>
<span class="line"><span>git merge origin/master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 合并提交ff44785404a8e的修改</span></span>
<span class="line"><span>git cherry-pick ff44785404a8e</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 将当前分支push到远程master分支</span></span>
<span class="line"><span>git push origin master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 删除远程仓库的hotfixes/BJVEP933分支</span></span>
<span class="line"><span>git push origin :hotfixes/BJVEP933</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 把所有tag推送到远程仓库</span></span>
<span class="line"><span>git push --tags</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 获取所有远程分支（不更新本地分支，另需merge）</span></span>
<span class="line"><span>git fetch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 获取所有原创分支并清除服务器上已删掉的分支</span></span>
<span class="line"><span>git fetch --prune</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 获取远程分支master并merge到当前分支</span></span>
<span class="line"><span>git pull origin master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 重命名文件README为README2</span></span>
<span class="line"><span>git mv README README2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 将当前版本重置为HEAD（通常用于merge失败回退）</span></span>
<span class="line"><span>git reset --hard HEAD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git rebase</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）</span></span>
<span class="line"><span>git branch -d hotfixes/BJVEP933</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 强制删除分支hotfixes/BJVEP933</span></span>
<span class="line"><span>git branch -D hotfixes/BJVEP933</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 列出git index包含的文件</span></span>
<span class="line"><span>git ls-files</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 图示当前分支历史</span></span>
<span class="line"><span>git show-branch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 图示所有分支历史</span></span>
<span class="line"><span>git show-branch --all</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示提交历史对应的文件修改</span></span>
<span class="line"><span>git whatchanged</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"><span>git revert dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 内部命令：显示某个git对象</span></span>
<span class="line"><span>git ls-tree HEAD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 内部命令：显示某个ref对于的SHA1 HASH</span></span>
<span class="line"><span>git rev-parse v2.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示所有提交，包括孤立节点</span></span>
<span class="line"><span>git reflog</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git show HEAD@{5}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 显示master分支昨天的状态</span></span>
<span class="line"><span>git show master@{yesterday}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 图示提交日志</span></span>
<span class="line"><span>git log --pretty=format:&#39;%h %s&#39; --graph</span></span>
<span class="line"><span>git show HEAD~3</span></span>
<span class="line"><span>git show -s --pretty=raw 2be7fcb476</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 暂存当前修改，将所有至为HEAD状态</span></span>
<span class="line"><span>git stash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 查看所有暂存</span></span>
<span class="line"><span>git stash list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 参考第一次暂存</span></span>
<span class="line"><span>git stash show -p stash@{0}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 应用第一次暂存</span></span>
<span class="line"><span>git stash apply stash@{0}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== 文件中搜索文本“delete from”</span></span>
<span class="line"><span>git grep &quot;delete from&quot;</span></span>
<span class="line"><span>git grep -e &#39;#define&#39; --and -e SORT_DIRENT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git gc</span></span>
<span class="line"><span>git fsck</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br></div></div><h2 id="新建仓库" tabindex="-1">新建仓库 <a class="header-anchor" href="#新建仓库" aria-label="Permalink to &quot;新建仓库&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 初始化当前项目</span></span>
<span class="line"><span>$ git init</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span>$ git init [project-name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 在指定目录创建一个空的 Git 仓库。运行这个命令会创建一个名为 directory，只包含 .git 子目录的空目录。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ git init --bare &lt;directory&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span>## 这个命令就是将一个版本库拷贝到另一个目录中，同时也将分支都拷贝到新的版本库中。这样就可以在新的版本库中提交到远程分支</span></span>
<span class="line"><span>$ git clone [url]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="git-配置" tabindex="-1">git 配置 <a class="header-anchor" href="#git-配置" aria-label="Permalink to &quot;git 配置&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 显示当前的Git配置</span></span>
<span class="line"><span>$ git config --list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 编辑Git配置文件</span></span>
<span class="line"><span>$ git config -e [--global]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 输出、设置基本的全局变量</span></span>
<span class="line"><span>$ git config --global user.email</span></span>
<span class="line"><span>$ git config --global user.name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ git config --global user.email &quot;MyEmail@gmail.com&quot;</span></span>
<span class="line"><span>$ git config --global user.name &quot;My Name&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 定义当前用户所有提交使用的作者邮箱。</span></span>
<span class="line"><span>$ git config --global alias.&lt;alias-name&gt; &lt;git-command&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 为Git命令创建一个快捷方式（别名）。</span></span>
<span class="line"><span>$ git config --system core.editor &lt;editor&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="git-状态" tabindex="-1">git 状态 <a class="header-anchor" href="#git-状态" aria-label="Permalink to &quot;git 状态&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 显示分支，未跟踪文件，更改和其他不同</span></span>
<span class="line"><span>$ git status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看其他的git status的用法</span></span>
<span class="line"><span>$ git help status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="git-信息" tabindex="-1">git 信息 <a class="header-anchor" href="#git-信息" aria-label="Permalink to &quot;git 信息&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span>$ git log --stat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 搜索提交历史，根据关键词</span></span>
<span class="line"><span>$ git log -S [keyword]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span>$ git log [tag] HEAD --pretty=format:%s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span>$ git log [tag] HEAD --grep feature</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span>$ git log --follow [file]</span></span>
<span class="line"><span>$ git whatchanged [file]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示指定文件相关的每一次diff</span></span>
<span class="line"><span>$ git log -p [file]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示过去5次提交</span></span>
<span class="line"><span>$ git log -5 --pretty --oneline</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span>$ git shortlog -sn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span>$ git blame [file]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示暂存区和工作区的差异</span></span>
<span class="line"><span>$ git diff</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span>$ git diff --cached [file]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span>$ git diff HEAD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示两次提交之间的差异</span></span>
<span class="line"><span>$ git diff [first-branch]...[second-branch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示今天你写了多少行代码</span></span>
<span class="line"><span>$ git diff --shortstat &quot;@{0 day ago}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 比较暂存区和版本库差异</span></span>
<span class="line"><span>$ git diff --staged</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 比较暂存区和版本库差异</span></span>
<span class="line"><span>$ git diff --cached</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 仅仅比较统计信息</span></span>
<span class="line"><span>$ git diff --stat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span>$ git show [commit]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示某次提交发生变化的文件</span></span>
<span class="line"><span>$ git show --name-only [commit]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span>$ git show [commit]:[filename]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示当前分支的最近几次提交</span></span>
<span class="line"><span>$ git reflog</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看远程分支</span></span>
<span class="line"><span>$ git br -r</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 创建新的分支</span></span>
<span class="line"><span>$ git br &lt;new_branch&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看各个分支最后提交信息</span></span>
<span class="line"><span>$ git br -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看已经被合并到当前分支的分支</span></span>
<span class="line"><span>$ git br --merged</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看尚未被合并到当前分支的分支</span></span>
<span class="line"><span>$ git br --no-merged</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="git-添加、暂存" tabindex="-1">git 添加、暂存 <a class="header-anchor" href="#git-添加、暂存" aria-label="Permalink to &quot;git 添加、暂存&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 添加一个文件</span></span>
<span class="line"><span>$ git add test.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 添加一个子目录中的文件</span></span>
<span class="line"><span>$ git add /path/to/file/test.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 支持正则表达式</span></span>
<span class="line"><span>$ git add ./*.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 添加指定文件到暂存区</span></span>
<span class="line"><span>$ git add [file1] [file2] ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span>$ git add [dir]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span>$ git add .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 添加每个变化前，都会要求确认</span></span>
<span class="line"><span>## 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span>$ git add -p</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="git-删除文件" tabindex="-1">git 删除文件 <a class="header-anchor" href="#git-删除文件" aria-label="Permalink to &quot;git 删除文件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 移除 HelloWorld.js</span></span>
<span class="line"><span>$ git rm HelloWorld.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 移除子目录中的文件</span></span>
<span class="line"><span>$ git rm /pather/to/the/file/HelloWorld.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span>$ git rm [file1] [file2] ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span>$ git rm --cached [file]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="管理分支" tabindex="-1">管理分支 <a class="header-anchor" href="#管理分支" aria-label="Permalink to &quot;管理分支&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 查看所有的分支和远程分支</span></span>
<span class="line"><span>$ git branch -a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 创建一个新的分支</span></span>
<span class="line"><span>$ git branch [branch-name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 重命名分支</span></span>
<span class="line"><span>## git branch -m &lt;旧名称&gt; &lt;新名称&gt;</span></span>
<span class="line"><span>$ git branch -m [branch-name] [new-branch-name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 编辑分支的介绍</span></span>
<span class="line"><span>$ git branch [branch-name] --edit-description</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 列出所有本地分支</span></span>
<span class="line"><span>$ git branch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 列出所有远程分支</span></span>
<span class="line"><span>$ git branch -r</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span>$ git branch [branch-name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 新建一个分支，并切换到该分支</span></span>
<span class="line"><span>$ git checkout -b [branch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 新建一个分支，指向指定commit</span></span>
<span class="line"><span>$ git branch [branch] [commit]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span>$ git branch --track [branch] [remote-branch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 切换到指定分支，并更新工作区</span></span>
<span class="line"><span>$ git checkout [branch-name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 切换到上一个分支</span></span>
<span class="line"><span>$ git checkout -</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span>$ git branch --set-upstream [branch] [remote-branch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 合并指定分支到当前分支</span></span>
<span class="line"><span>$ git merge [branch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 选择一个commit，合并进当前分支</span></span>
<span class="line"><span>$ git cherry-pick [commit]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 删除分支</span></span>
<span class="line"><span>$ git branch -d [branch-name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 删除远程分支</span></span>
<span class="line"><span>$ git push origin --delete [branch-name]</span></span>
<span class="line"><span>$ git branch -dr [remote/branch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 切换到某个分支</span></span>
<span class="line"><span>$ git co &lt;branch&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 创建新的分支，并且切换过去</span></span>
<span class="line"><span>$ git co -b &lt;new_branch&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 基于branch创建新的new_branch</span></span>
<span class="line"><span>$ git co -b &lt;new_branch&gt; &lt;branch&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除</span></span>
<span class="line"><span>$ git co $id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 把某次历史提交记录checkout出来，创建成一个分支</span></span>
<span class="line"><span>$ git co $id -b &lt;new_branch&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 删除某个分支</span></span>
<span class="line"><span>$ git br -d &lt;branch&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 强制删除某个分支 (未被合并的分支被删除的时候需要强制)</span></span>
<span class="line"><span>$ git br -D &lt;branch&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h2 id="git-checkout" tabindex="-1">git checkout <a class="header-anchor" href="#git-checkout" aria-label="Permalink to &quot;git checkout&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 检出一个版本库，默认将更新到master分支</span></span>
<span class="line"><span>$ git checkout</span></span>
<span class="line"><span>## 检出到一个特定的分支</span></span>
<span class="line"><span>$ git checkout branchName</span></span>
<span class="line"><span>## 新建一个分支，并且切换过去，相当于&quot;git branch &lt;名字&gt;; git checkout &lt;名字&gt;&quot;</span></span>
<span class="line"><span>$ git checkout -b newBranch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="添加远程仓库" tabindex="-1">添加远程仓库 <a class="header-anchor" href="#添加远程仓库" aria-label="Permalink to &quot;添加远程仓库&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 下载远程仓库的所有变动</span></span>
<span class="line"><span>$ git fetch [remote]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示所有远程仓库</span></span>
<span class="line"><span>$ git remote -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示某个远程仓库的信息</span></span>
<span class="line"><span>$ git remote show [remote]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span>$ git remote add [shortname] [url]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看远程服务器地址和仓库名称</span></span>
<span class="line"><span>$ git remote -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 添加远程仓库地址</span></span>
<span class="line"><span>$ git remote add origin git@ github:xxx/xxx.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 设置远程仓库地址(用于修改远程仓库地址)</span></span>
<span class="line"><span>$ git remote set-url origin git@ github.com:xxx/xxx.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 删除远程仓库</span></span>
<span class="line"><span>$ git remote rm &lt;repository&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 上传本地指定分支到远程仓库</span></span>
<span class="line"><span>## 把本地的分支更新到远端origin的master分支上</span></span>
<span class="line"><span>## git push &lt;远端&gt; &lt;分支&gt;</span></span>
<span class="line"><span>## git push 相当于 git push origin master</span></span>
<span class="line"><span>$ git push [remote] [branch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span>$ git push [remote] --force</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 推送所有分支到远程仓库</span></span>
<span class="line"><span>$ git push [remote] --all</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="撤销" tabindex="-1">撤销： <a class="header-anchor" href="#撤销" aria-label="Permalink to &quot;撤销：&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span>$ git checkout [file]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span>$ git checkout [commit] [file]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span>$ git checkout .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span>$ git reset [file]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span>$ git reset --hard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span>$ git reset [commit]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span>$ git reset --hard [commit]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span>$ git reset --keep [commit]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span>## 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span>$ git revert [commit]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 恢复最后一次提交的状态</span></span>
<span class="line"><span>$ git revert HEAD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span>$ git stash</span></span>
<span class="line"><span>$ git stash pop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 列所有stash</span></span>
<span class="line"><span>$ git stash list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 恢复暂存的内容</span></span>
<span class="line"><span>$ git stash apply</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 删除暂存区</span></span>
<span class="line"><span>$ git stash drop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="提交-commit" tabindex="-1">提交 commit <a class="header-anchor" href="#提交-commit" aria-label="Permalink to &quot;提交 commit&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 提交暂存区到仓库区附带提交信息</span></span>
<span class="line"><span>$ git commit -m [message]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span>$ git commit [file1] [file2] ... -m [message]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span>$ git commit -a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 提交时显示所有diff信息</span></span>
<span class="line"><span>$ git commit -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span>## 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span>$ git commit --amend -m [message]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span>$ git commit --amend [file1] [file2] ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="git-diff" tabindex="-1">git diff <a class="header-anchor" href="#git-diff" aria-label="Permalink to &quot;git diff&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 显示工作目录和索引的不同</span></span>
<span class="line"><span>$ git diff</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示索引和最近一次提交的不同</span></span>
<span class="line"><span>$ git diff --cached</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示工作目录和最近一次提交的不同</span></span>
<span class="line"><span>$ git diff HEAD</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="git-grep" tabindex="-1">git grep <a class="header-anchor" href="#git-grep" aria-label="Permalink to &quot;git grep&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>可选配置：</span></span>
<span class="line"><span>## 感谢Travis Jeffery提供的以下用法：</span></span>
<span class="line"><span>## 在搜索结果中显示行号</span></span>
<span class="line"><span>$ git config --global grep.lineNumber true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 是搜索结果可读性更好</span></span>
<span class="line"><span>$ git config --global alias.g &quot;grep --break --heading --line-number&quot;</span></span>
<span class="line"><span>## 在所有的java中查找variableName</span></span>
<span class="line"><span>$ git grep &#39;variableName&#39; -- &#39;*.java&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 搜索包含 &quot;arrayListName&quot; 和, &quot;add&quot; 或 &quot;remove&quot; 的所有行</span></span>
<span class="line"><span>$ git grep -e &#39;arrayListName&#39; --and \\( -e add -e remove \\)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="git-log" tabindex="-1">git log <a class="header-anchor" href="#git-log" aria-label="Permalink to &quot;git log&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 显示所有提交</span></span>
<span class="line"><span>$ git log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 显示某几条提交信息</span></span>
<span class="line"><span>$ git log -n 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 仅显示合并提交</span></span>
<span class="line"><span>$ git log --merges</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看该文件每次提交记录</span></span>
<span class="line"><span>$ git log &lt;file&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看每次详细修改内容的diff</span></span>
<span class="line"><span>$ git log -p &lt;file&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看最近两次详细修改内容的diff</span></span>
<span class="line"><span>$ git log -p -2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看提交统计信息</span></span>
<span class="line"><span>$ git log --stat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="merge" tabindex="-1">merge <a class="header-anchor" href="#merge" aria-label="Permalink to &quot;merge&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 将其他分支合并到当前分支</span></span>
<span class="line"><span>$ git merge branchName</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 在合并时创建一个新的合并后的提交</span></span>
<span class="line"><span>## 不要 Fast-Foward 合并，这样可以生成 merge 提交</span></span>
<span class="line"><span>$ git merge --no-ff branchName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="mv-重命名或移动一个文件" tabindex="-1">mv 重命名或移动一个文件 <a class="header-anchor" href="#mv-重命名或移动一个文件" aria-label="Permalink to &quot;mv 重命名或移动一个文件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 重命名</span></span>
<span class="line"><span>$ git mv test.js test2.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 移动</span></span>
<span class="line"><span>$ git mv test.js ./new/path/test.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span>$ git mv [file-original] [file-renamed]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 强制重命名或移动</span></span>
<span class="line"><span>## 这个文件已经存在，将要覆盖掉</span></span>
<span class="line"><span>$ git mv -f myFile existingFile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="tag" tabindex="-1">tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;tag&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 列出所有tag</span></span>
<span class="line"><span>$ git tag</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 新建一个tag在当前commit</span></span>
<span class="line"><span>$ git tag [tag]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 新建一个tag在指定commit</span></span>
<span class="line"><span>$ git tag [tag] [commit]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 删除本地tag</span></span>
<span class="line"><span>$ git tag -d [tag]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 删除远程tag</span></span>
<span class="line"><span>$ git push origin :refs/tags/[tagName]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看tag信息</span></span>
<span class="line"><span>$ git show [tag]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 提交指定tag</span></span>
<span class="line"><span>$ git push [remote] [tag]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 提交所有tag</span></span>
<span class="line"><span>$ git push [remote] --tags</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 新建一个分支，指向某个tag</span></span>
<span class="line"><span>$ git checkout -b [branch] [tag]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="push" tabindex="-1">push <a class="header-anchor" href="#push" aria-label="Permalink to &quot;push&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 从远端origin的master分支更新版本库</span></span>
<span class="line"><span>## git pull &lt;远端&gt; &lt;分支&gt;</span></span>
<span class="line"><span>$ git pull origin master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 抓取远程仓库所有分支更新并合并到本地，不要快进合并</span></span>
<span class="line"><span>$ git pull --no-ff</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="ci" tabindex="-1">ci <a class="header-anchor" href="#ci" aria-label="Permalink to &quot;ci&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git ci &lt;file&gt;</span></span>
<span class="line"><span>$ git ci .</span></span>
<span class="line"><span>## 将git add, git rm和git ci等操作都合并在一起做</span></span>
<span class="line"><span>$ git ci -a</span></span>
<span class="line"><span>$ git ci -am &quot;some comments&quot;</span></span>
<span class="line"><span>## 修改最后一次提交记录</span></span>
<span class="line"><span>$ git ci --amend</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="rebase" tabindex="-1">rebase <a class="header-anchor" href="#rebase" aria-label="Permalink to &quot;rebase&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 将experimentBranch应用到master上面</span></span>
<span class="line"><span>## git rebase &lt;basebranch&gt; &lt;topicbranch&gt;</span></span>
<span class="line"><span>$ git rebase master experimentBranch</span></span>
<span class="line"><span>reset (谨慎使用)</span></span>
<span class="line"><span>将当前的头指针复位到一个特定的状态。这样可以使你撤销 merge、pull、commits、add 等 这是个很强大的命令，但是在使用时一定要清楚其所产生的后果</span></span>
<span class="line"><span>## 使 staging 区域恢复到上次提交时的状态，不改变现在的工作目录</span></span>
<span class="line"><span>$ git reset</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 使 staging 区域恢复到上次提交时的状态，覆盖现在的工作目录</span></span>
<span class="line"><span>$ git reset --hard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 将当前分支恢复到某次提交，不改变现在的工作目录</span></span>
<span class="line"><span>## 在工作目录中所有的改变仍然存在</span></span>
<span class="line"><span>$ git reset dha78as</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 将当前分支恢复到某次提交，覆盖现在的工作目录</span></span>
<span class="line"><span>## 并且删除所有未提交的改变和指定提交之后的所有提交</span></span>
<span class="line"><span>$ git reset --hard dha78as</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 生成一个可供发布的压缩包</span></span>
<span class="line"><span>$ git archive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 打补丁</span></span>
<span class="line"><span>$ git apply ../sync.patch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 测试补丁能否成功</span></span>
<span class="line"><span>$ git apply --check ../sync.patch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 查看Git的版本</span></span>
<span class="line"><span>$ git --version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,45)]))}const o=n(e,[["render",i]]);export{g as __pageData,o as default};