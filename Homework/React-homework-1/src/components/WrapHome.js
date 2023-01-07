function WrapHome() {
  return (
    <>
      <input id="profileId" type="hidden" value="javajigi" />
      <input id="profileUserId" type="hidden" value="5tdm" />
      <input id="profileUserName" type="hidden" value="박재성" />
      <input id="blockedUser" type="hidden" value="false" />
      <header className="header_head_menubar #my_profile">
        <h2 className="screen_out">박재성</h2>
        <div className="cover_image"></div>

        <div className="wrap_profile">
          <div className="bloger_thumb">
            <img
              className="profileUserImage img_thumb"
              src="https://avatars.githubusercontent.com/u/85085804?v=4"
              width="100"
              height="100"
              alt="이미지정보"
              data-image="https://avatars.githubusercontent.com/u/85085804?v=4"
            />
            <input
              className="profileUserImageUrl"
              type="hidden"
              value="http://t1.daumcdn.net/brunch/service/guest/image/V4wdZX1aq-c_w0D7_taGTXkIgrk"
            />
          </div>
          <div className="wrap_profile_desc">
            <strong className="profileUserName tit_bloger">복무창</strong>
            <span className="blog_cpeg">
              <em className="screen_out">소속</em>
              <span className="txt_info">충북대학교</span> <em className="screen_out">직업</em>
              <span className="txt_info">3학년</span>{' '}
            </span>
            <dl className="blog_count ">
              <dt className="screen_out">브런치 정보</dt>
              <dd>
                <a href="/@javajigi/follower" className="link_count #follower">
                  <em className="txt_g">구독자</em>
                  <span className="num_count">0</span>
                </a>
              </dd>
              <dd>
                <a href="/@javajigi/following" className="link_count #following">
                  <em className="txt_g">관심작가</em>
                  <span className="num_count">0</span>
                </a>
              </dd>
            </dl>
          </div>
          <div className="wrap_profile_btn">
            <span className="#my_follow">
              <button
                type="button"
                className="btn_type btn_default btn_profile btnFollow #p_follow"
              >
                구독하기
              </button>
            </span>

            <div className="more_control">
              {' '}
              {/*<!-- 메뉴더보기 클릭시 ctrl_on 클래스 추가 -->*/}
              <button type="button" className="btnMoreToggle btn_morectrl">
                <span className="ico_brunch_v1 ico_morectrl">메뉴 더보기</span>
              </button>
              <div className="layer_action_ctrl">
                <div className="inner_action_ctrl">
                  <button type="button" className="btnBlockProfile btn_ctrl requireLogin">
                    차단하기
                  </button>
                  <button type="button" className="btnReportProfile btn_ctrl requireLogin">
                    신고하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <brunchbookproject-side-banner></brunchbookproject-side-banner>
      </header>
    </>
  );
}

export default WrapHome;
