import './App.css';
import ServiceHeaderHome from './components/ServiceHeaderHome';
//import WrapSideMenu from './components/WrapSideMenu';
import './copytest/B.Font.min.css';
import './copytest/B.Home.min.css';
import './copytest/B.Message.min.css';
import './copytest/B.min.css';

function Test() {
  return (
    <div>
      <div className="brunch_profile">
        {/* <tiara-page t-name="프로필" t-section="profile" t-page="common"></tiara-page> */}
        <ServiceHeaderHome />
        {/* <WrapSideMenu /> */}
        <WrapHome />
        <div id="wrapHome"></div>
        <div className="dimmed_layer"></div>
        <div className="dimmed_guide_layer"></div>
        <div className="guide_layer">
          <div className="layer_content"></div>
          <div className="layer_foot"></div>
        </div>
      </div>
    </div>
  );
}

function WrapHome() {
  return (
    <div id="wrapHome">
      <input id="profileId" type="hidden" value="bokob" />
      <input id="profiledUserId" type="hidden" value="5tdm" />
      <input id="profileUserName" type="hidden" value="복무창" />
      <input id="blockedUser" type="hidden" value="false" />
      <header className="header_head_menubar #my_profile">
        <h2 className="screen_out">복무창</h2>
        <div className="cover_image"></div>
        <div className="wrap_profile">
          <div className="bloger_thumb">
            <img
              class="profileUserImage img_thumb"
              src="https://avatars.githubusercontent.com/u/85085804?v=4"
              width="100"
              height="100"
              alt="이미지정보"
              data-image="https://avatars.githubusercontent.com/u/85085804?v=4"
            />
            <input
              className="profileUserImageUrl"
              type="hidden"
              value="https://avatars.githubusercontent.com/u/85085804?v=4"
            />
          </div>
          <div className="wrap_profile_desc">
            <strong className="profileUserName tit_bloger">복무창</strong>
            <span className="blog_cpeg">
              <em className="screen_out">소속</em>
              <span className="txt_info">충북대학교 컴퓨터공학과</span>
              <em class="screen_out">직업</em>
              <span className="txt_info">백수</span>
            </span>
            <dl className="wrap_profile_btn">
              <dt class="screen_out">브런치 정보</dt>
              <dd>
                <a href="/@javajigi/follower" className="link_count #follower">
                  <br />
                  <br /> {/* 왜 안됨?*/}
                  <em className="txt_g">구독자</em>
                  <span className="num_count">1,270</span>
                </a>
              </dd>
              <dd>
                <a href="/@javajigi/following" class="link_count #following">
                  <em className="txt_g">관심작가</em>
                  <span className="num_count">26</span>
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
              ::after
            </div>
          </div>
          ::after
        </div>
        <brunchbookproject-side-banner></brunchbookproject-side-banner>
        <div className="tab_contents">
          <strong className="screen_out">작가프로필 하위메뉴</strong>
          <ul id="contentsTab" className="list_tab">
            <li>
              <a href="#info" className="infoTab link_tab #info_open">
                <span className="txt_tab">작가소개</span>
              </a>
            </li>
            <li className="on">
              <a href="#articles" className="articleTab link_tab">
                <span className="txt_tab">글 28</span>
              </a>
            </li>
            <li>
              <a href="#works" className="magazineTab link_tab">
                <span className="txt_tab">작품 0</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Test;
