function Introduce() {
  return (
    <div id="wrapInfo" class="wrap_authorinfo #my_profile_info" style={{ display: 'block' }}>
      <h3 class="screen_out">작가소개</h3>
      <div class="author_intro animation_up">
        <strong class="tit_intro">소개</strong>
        <p class="desc_intro">충북대학교 충붕이</p>
        <ul class="list_tag">
          <li>
            <a href="/keyword/profile/IT" class="link_tag #profilekeyword">
              IT
            </a>
          </li>
          <li>
            <a href="/keyword/profile/교육" class="link_tag #profilekeyword">
              게임
            </a>
          </li>
          <li>
            <a href="/keyword/profile/스타트업" class="link_tag #profilekeyword">
              그래픽스
            </a>
          </li>
          <li>
            <a href="/keyword/profile/CEO" class="link_tag #profilekeyword">
              백수
            </a>
          </li>
          <li>
            <a href="/keyword/profile/강사" class="link_tag #profilekeyword">
              3학년
            </a>
          </li>
          <li>
            <a href="/keyword/profile/개발자" class="link_tag #profilekeyword">
              만화
            </a>
          </li>
          <li>
            <a href="/keyword/profile/넥스트스텝" class="link_tag #profilekeyword">
              충북대학교
            </a>
          </li>
        </ul>
      </div>

      <div class="author_intro animation_up">
        <strong class="tit_intro2">웹사이트</strong>
        <ul class="list_sns">
          <li>
            <a
              href="//facebook.com/javajigi"
              class="link_sns #website"
              target="_blank"
              data-tiara-action-name="작가 프로필 > 소개탭 > 웹사이트 영역 > 페이스북 버튼 클릭"
              data-tiara-layer="website facebook"
            >
              <span class="ico_brunch_v1 ico_facebook">javajigi</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Introduce;
