function WrapSideMenu() {
  return (
    <div id="wrapSideMenu" className="open">
      <main>
        <button
          type="button"
          id="btnCloseSideMenu"
          className="btn_close_side_menu img_side_menu ico_close f_r text_hide"
        >
          닫기
        </button>
        <div className="wrap_side_profile logout">
          <div className="logo_service"></div>
          <p className="slogan">
            You can make anything
            <br />
            by writing
          </p>
          <p className="slogan_writer">- C.S.Lewis -</p>
          <a
            href="/"
            className="#side_request btn_apply_author home"
            id="brunchSigninButton"
            data-tiara-action-name="메뉴 > 시작하기 버튼 클릭"
            data-tiara-layer="login"
          >
            <button className="btn_request">브런치 시작하기</button>
          </a>
        </div>

        <div class="wrap_side_service_menu">
          <ul>
            <li>
              <a
                className="menu_word4 #side_brunch"
                href="/"
                data-tiara-action-name="메뉴 > 브런치 홈 버튼 클릭"
                data-tiara-layer="top"
              >
                <span className="bar_left"></span>브런치 홈<span className="bar_right"></span>
              </a>
            </li>
            <li>
              <a
                className="menu_word5 #side_now brunchNowLink"
                href="/now"
                data-tiara-action-name="메뉴 > 브런치 나우 버튼 클릭"
                data-tiara-layer="now"
              >
                <span className="bar_left"></span>브런치 나우<span className="bar_right"></span>
              </a>
            </li>
            <li>
              <a
                className="menu_word5 #side_publish brunchPublishLink"
                href="/publish"
                data-tiara-action-name="메뉴 > 브런치 책방 버튼 클릭"
                data-tiara-layer="bookshop"
              >
                <span className="bar_left"></span>브런치 책방<span class="bar_right"></span>
              </a>
            </li>
          </ul>

          <div className="wrap_side_setting wrap_find_user" style={{ position: 'inherit' }}>
            <div className="menu_side_banner" style={{ paddingBottom: '40px' }}>
              <a
                className="#side_project"
                href="/special/list"
                data-tiara-action-name="메뉴 > 작가 지원 프로젝트 버튼 클릭"
                data-tiara-layer="projectlist"
              >
                <img
                  src="//i1.daumcdn.net/thumb/R336x0/?fname=http://t1.daumcdn.net/brunch/static/img/help/pc/top/side_banner_20171219.png"
                  alt="프로젝트 리스트 바로가기"
                  style={{ width: '168px' }}
                />
              </a>
            </div>{' '}
            <a
              href="/signin/find_account"
              className="find_user"
              data-tiara-action-name="메뉴 > 계정 찾기 버튼 클릭"
              data-tiara-layer="find_accounts"
            >
              계정을 잊어버리셨나요?
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WrapSideMenu;
