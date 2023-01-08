let works = [
  {
    title: '슬픈개구리',
    src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbaqBe5%2FbtqJ1KNHOkT%2FtE68CCimK5sMTfpWKfMXxk%2Fimg.jpg',
    underTitle: '페페',
    contextCount: 33,
    subscribeCount: 999,
  },
  {
    title: '파일파일',
    src: 'https://s3.orbi.kr/data/file/united2/edfa197388d94b8587dab15007314da2.jpeg',
    underTitle: '파이리',
    contextCount: 3,
    subscribeCount: 333,
  },

  {
    title: '웃음',
    src: 'data:image/png;base64,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',
    underTitle: '블루',
    contextCount: 1,
    subscribeCount: 1,
  },
  {
    title: '정색',
    src: 'https://thumb.mt.co.kr/06/2020/07/2020071418563658697_1.jpg/dims/optimize/',
    underTitle: '홀란드',
    contextCount: 123,
    subscribeCount: 14528,
  },
];

let articles = [
  {
    src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTZfMjUx/MDAxNTYzMjQ4MzA0MjMz.RoCyQtzauaY_tjpTEDUbthadPX7MjxRgzKM3bF0811og.dRd5KWOUW-PHEwaSRXn3XO1gMt-xZGgGiRpSzZXN1kEg.JPEG.idolbingo/http___pub.cyphers.co.kr_images2_art_2013_02_28_1362017942566.jpg?type=w2',
    title: '피폐',
    content:
      '집에서 쉬고 싶다. 집에서 쉬고 싶다. 집에서 쉬고 싶다. 집에서 쉬고 싶다. 집에서 쉬고 싶다. 집에서 쉬고 싶다. 집에서 쉬고 싶다. 집에서 쉬고 싶다.',
    comment: 3,
  },
  {
    src: 'https://image.fmkorea.com/files/attach/new/20191118/486616/99745/2395187519/99b983892094b5c6d2fc3736e15da7d1_4.jpg',
    title: '로니콜먼',
    content: '꿈에서 로니콜먼 만난 만화',
    comment: 123,
  },
  {
    src: 'https://archeage.xlgames.com/characters/07c63b45-058f-4ce7-8a2c-2929e8af2598/profileImage',
    title: '가재맨',
    content: '넌 나가라~ 넌 나가라~ 넌 나가라~ 넌 나가라~ 넌 나가라~ 넌 나가라~',
    comment: 324,
  },
];

export { works, articles };
