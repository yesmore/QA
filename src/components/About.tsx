export default () => (
  <div text-sm text-slate-4 pt-2 ml-1 border-t border-dashed border-slate>
    <span text-lg>关于</span>
    {"  "}
    本站基于{" "}
    <a
      border-b
      border-slate
      border-none
      hover:border-dashed
      href="https://platform.openai.com"
      target="_blank">
      OpenAI GPT-3.5 Turbo API
    </a>{" "}
    接口。如果你想和它聊天，
    <strong>
      请先准备好{" "}
      <a
        border-b
        border-slate
        border-none
        hover:border-dashed
        href="https://platform.openai.com/account/api-keys"
        target="_blank">
        OpenAI API Key
      </a>{" "}
      密钥并填写。
    </strong>
    你也可以选中'免费体验密钥'功能，即可使用站长提供的
    <strong>免费密钥且无需填写自己的密钥</strong>
    体验（若填写则优先使用你的密钥）。注意，免费体验功能不能保证长久提供。
    <p my-1>
      如果你需要一些灵感，你可以尝试“随机预设场景”，它会自动生成一段来自{" "}
      <a
        border-b
        border-slate
        border-none
        hover:border-dashed
        href="https://prompts.chat/"
        target="_blank">
        Awesome ChatGPT Prompts
      </a>{" "}
      的话题，让你的聊天更加有趣。
    </p>
    <p class="flex flex-wrap">
      补充：欢迎加入{" "}
      <a href="https://t.me/yesmore_cc" target="_blank">
        <img src="https://img.shields.io/badge/-Juiçe的秘密基地-fff?logo=Telegram" />
      </a>{" "}
      与喵娘聊天~（已集成免费 ChatGPT 聊天机器人）
    </p>
  </div>
);
