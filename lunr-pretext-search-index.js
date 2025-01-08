var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "welcome",
  "level": "1",
  "url": "welcome.html",
  "type": "Section",
  "number": "1.1",
  "title": "Welcome to Money and You!",
  "body": " Welcome to Money and You!  Welcome to Money and You! I am thrilled that you are part of my course. I hope that this course will end up being one of your most useful in your undergraduate curriculum. Understanding personal finance and how you think and act about money can benefit you in a number of ways.  Money and You is a twist on a traditional personal finance course. Over the semester, you will learn the fundamentals of managing your money, which you will be able to use for the rest of your life. You will learn techniques for setting a budget; why and how to build credit; the process, benefits, and drawbacks of buying a home; the world of insurance; taxes as they apply to you; loans and debt; car-buying; scams; saving for retirement; using modern finance tools; and setting financial goals.  The twist on this course is the opportunity to reflect on how you (individually) behave around and think about money. You will develop techniques to manage stress about money, explore how money can affect your relationships, reflect on why you want certain things, explore your feelings about risk and reward, and consider why long-term financial goals can be difficult without the proper mindset.   What this course is not    Source: Medium    This course is not a ``how to get rich quickly\" lesson. It is more of a ``how to accumulate wealth slowly\" course. Let's just get this out of the way now. If there were a proven track to move into the upper class, it wouldn't be some secret that is easily divulged in a self-help book or class. The course is about setting and achieving realistic and manageable financial goals.   This course is not a course on investment techniques. We will cover how to save for retirement, which can involve investing, but we will not explore specific investment strategies like picking particular stocks or trying to predict the crypto market. We will explore what finance experts do with their own money and why. We will explore general strategies for saving. We will not make any speculations or bets on particular investment opportunities.  Cards on the table, I am a professor of mathematics. However, this course is not a mathematics course. Of course, there will be numbers since money is a quantitative object. You will not need to memorize complex formulas. You will need to be able to understand some arithmetic and how to apply arithmetic in the context of some applied problems, but you will have access to pretty much all computational tools you would like.   Source: Imgur     "
},
{
  "id": "section1-1-2-1",
  "level": "2",
  "url": "welcome.html#section1-1-2-1",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Source: Medium   "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "welcome.html#figure-2",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Source: Imgur   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
