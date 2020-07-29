import React from "react";

export default function Form(props) {
  return <div>
     <form class="form-style" action ="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfGnBVVx08IipMbyW8ZKKhh-RirPIbxJKqHF0DJVnE1QWCIOw/formResponse">
        <ul>
          <li>
            <input
              type="text"
              name="entry.1781500597"
              class="field-style field-split align-left"
              placeholder="名前"
            />
            <input
              type="text"
              name="entry.1640447617"
              class="field-style field-split align-right"
              placeholder="性別"
            />
          </li>
          <li>
            <input
              type="text"
              name="entry.297979220"
              class="field-style field-split align-left"
              placeholder="生年月日"
            />
            <input
              type="text"
              name="entry.1078004677"
              class="field-style field-split align-right"
              placeholder="住所"
            />
          </li>

          <li>
            <input
              type="email"
              name="entry.2040870261"
              class="field-style field-split align-left"
              placeholder="メール"
            />
            <input
              type="text"
              name="entry.1916706626"
              class="field-style field-split align-right"
              placeholder="電話番号"
            />
          </li>

          <li>
            <input
              type="text"
              name="entry.324267323"
              class="field-style field-split align-left"
              placeholder="大学名、学科"
            />
            <input
              type="text"
              name="entry.340482159"
              class="field-style field-split align-right"
              placeholder="日本語レベル"
            />
          </li>


          <li>
            <input
              type="text"
              name="entry.86165619"
              class="field-style field-full align-none"
              placeholder="職歴"
            />
          </li>
          <li>
            <textarea
              name="entry.1253529684"
              class="field-style"
              placeholder="何か質問がありますか？"
            ></textarea>
          </li>
          <li>
            <input type="submit" value="応募" />
          </li>
        </ul>
      </form>
  </div>;
}
