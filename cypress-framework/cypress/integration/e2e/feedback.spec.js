
import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe("FeedBack test using fixture",function(){

    before(function () {
        FeedbackPage.load()
      })
    
    it("Using fixture data ",()=>{
        FeedbackPage.submitFeedback()
    }) 
    

})