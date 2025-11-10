let customerName = "Sarah Johnson";
let customerComment = "The cafe has a very cozy environment and great coffee. Loved it!";

let review = {
    name: customerName,
    comment: customerComment
};

function printReviewMessage(reviewObj) {
    let upperName = reviewObj.name.toUpperCase();
    
    let shortComment = reviewObj.comment.substring(0, 20);

    console.log(`Thank you, ${upperName}! Your review: "${shortComment}..." has been recorded.`);
}

printReviewMessage(review);
