function WrapHome() {
  return (
    <>
      <input id="profileId" type="hidden" value="javajigi" />
      <input id="profileUserId" type="hidden" value="5tdm" />
      <input id="profileUserName" type="hidden" value="박재성" />
      <input id="blockedUser" type="hidden" value="false" />
      <header class="header_head_menubar #my_profile">
        <h2 class="screen_out">박재성</h2>
        <div class="cover_image"></div>

        <div class="wrap_profile">
          <div class="bloger_thumb">
            <img
              class="profileUserImage img_thumb"
              src="https://avatars.githubusercontent.com/u/85085804?v=4"
              width="100"
              height="100"
              alt="이미지정보"
              data-image="https://avatars.githubusercontent.com/u/85085804?v=4"
            />
            <input
              class="profileUserImageUrl"
              type="hidden"
              value="http://t1.daumcdn.net/brunch/service/guest/image/V4wdZX1aq-c_w0D7_taGTXkIgrk"
            />
          </div>
          <div class="wrap_profile_desc">
            <strong class="profileUserName tit_bloger">복무창</strong>
            <span class="blog_cpeg">
              <em class="screen_out">소속</em>
              <span class="txt_info">충북대학교</span> <em class="screen_out">직업</em>
              <span class="txt_info">3학년</span>{' '}
            </span>
            <dl class="blog_count ">
              <dt class="screen_out">브런치 정보</dt>
              <dd>
                <a href="/@javajigi/follower" class="link_count #follower">
                  <em class="txt_g">구독자</em>
                  <span class="num_count">1,270</span>
                </a>
              </dd>
              <dd>
                <a href="/@javajigi/following" class="link_count #following">
                  <em class="txt_g">관심작가</em>
                  <span class="num_count">26</span>
                </a>
              </dd>
            </dl>
          </div>
          <div class="wrap_profile_btn">
            <span class="#my_follow">
              <button type="button" class="btn_type btn_default btn_profile btnFollow #p_follow">
                구독하기
              </button>
            </span>

            <div class="more_control">
              {' '}
              {/*<!-- 메뉴더보기 클릭시 ctrl_on 클래스 추가 -->*/}
              <button type="button" class="btnMoreToggle btn_morectrl">
                <span class="ico_brunch_v1 ico_morectrl">메뉴 더보기</span>
              </button>
              <div class="layer_action_ctrl">
                <div class="inner_action_ctrl">
                  <button type="button" class="btnBlockProfile btn_ctrl requireLogin">
                    차단하기
                  </button>
                  <button type="button" class="btnReportProfile btn_ctrl requireLogin">
                    신고하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <brunchbookproject-side-banner></brunchbookproject-side-banner>

        <div class="tab_contents">
          <strong class="screen_out">작가프로필 하위메뉴</strong>
          <ul id="contentsTab" class="list_tab">
            <li>
              <a href="#info" class="infoTab link_tab #info_open">
                <span class="txt_tab">작가소개</span>
              </a>
            </li>
            <li class="on">
              <a href="#articles" class="articleTab link_tab">
                <span class="txt_tab">글 28</span>
              </a>
            </li>
            <li>
              <a href="#works" class="magazineTab link_tab">
                <span class="txt_tab">작품 0</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
      {/* 구분선 밑부분 부터 main 태그   article 들어가는 곳임*/}
    </>
  );
}

export default WrapHome;
