function ServiceHeaderHome() {
  return (
    <>
      <tiara-page t-name="프로필" t-section="profile" t-page="common"></tiara-page>
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
            <a href="/@javajigi">
              <img
                className="profile_thumb"
                src="//img1.daumcdn.net/thumb/C40x40.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/V4wdZX1aq-c_w0D7_taGTXkIgrk"
                alt=""
              />
              <span className="user_name">박재성</span>
            </a>
          </div>

          <div className="f_r">
            <div className="wrap_btn_search ">
              <form action="/search" method="get">
                <input
                  name="q"
                  id="searchQuery"
                  type="text"
                  title="검색어입력"
                  placeholder="검색어를 입력해 주세요"
                  autocomplete="off"
                  value=""
                />
                <input name="profileId" type="hidden" value="javajigi" />
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
              >
                검색
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceHeaderHome;
