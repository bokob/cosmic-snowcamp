function ServiceHeaderHome() {
  return (
    <div className="service_header home" data-tiara-layer="gnb">
      <div className="wrap_inner  ">
        <div className="f_l">
          <button
            id="btnServiceMenu"
            type="button"
            className="f_l text_hide btn_menu img_ico #sidebar "
          >
            메뉴
          </button>

          <h1 className="f_l">
            <a href="/" className="logo_service text_hide" title="brunch">
              brunch
            </a>
          </h1>
        </div>

        <div className="wrap_custom wrap_custom_home">
          <a href="/">
            <img
              className="profile_thumb"
              src="https://avatars.githubusercontent.com/u/85085804?v=4"
              alt="프로필"
            />
            <span className="user_name">복무창</span>
          </a>
        </div>

        <div className="f_r">
          <div className="wrap_btn_search  show">
            <form action="/search" method="get">
              <input
                name="q"
                id="searchQuery"
                type="text"
                title="검색어입력"
                placeholder="검색어를 입력해 주세요"
                autocomplete="off"
                value=""
                style={{ opacity: '1', marginleft: '37px' }}
              />
              <input name="profileId" type="hidden" value="bokob" />
            </form>
            <button
              id="btnServiceMenuSearch"
              type="button"
              className="f_r img_ico text_hide btn_search #search_btn"
              data-tiara-action-name="TOP > GNB 우측 검색 버튼 클릭"
              data-tiara-action-kind="Search"
              data-tiara-layer="search"
              data-tiara-search_term=" "
              data-tiara-search_type="keyword"
              style={{ marginRight: '172px' }}
            >
              검색
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHeaderHome;
