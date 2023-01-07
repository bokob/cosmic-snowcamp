function Introduce() {
  return (
    <div id="wrapInfo" class="wrap_authorinfo #my_profile_info" style={{ display: 'block' }}>
      <h3 class="screen_out">작가소개</h3>
      <div class="author_intro animation_up">
        <strong class="tit_intro">소개</strong>
        <p class="desc_intro">
          프로그래머 교육 서비스인 넥스트스텝을 운영하고 있으며, 우아한형제들에서 우아한테크코스
          교육 과정을 만들어 가고 있다.
        </p>
        <ul class="list_tag">
          <li>
            <a href="/keyword/profile/IT" class="link_tag #profilekeyword">
              IT
            </a>
          </li>
          <li>
            <a href="/keyword/profile/교육" class="link_tag #profilekeyword">
              교육
            </a>
          </li>
          <li>
            <a href="/keyword/profile/스타트업" class="link_tag #profilekeyword">
              스타트업
            </a>
          </li>
          <li>
            <a href="/keyword/profile/CEO" class="link_tag #profilekeyword">
              CEO
            </a>
          </li>
          <li>
            <a href="/keyword/profile/강사" class="link_tag #profilekeyword">
              강사
            </a>
          </li>
          <li>
            <a href="/keyword/profile/개발자" class="link_tag #profilekeyword">
              개발자
            </a>
          </li>
          <li>
            <a href="/keyword/profile/넥스트스텝" class="link_tag #profilekeyword">
              넥스트스텝
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
