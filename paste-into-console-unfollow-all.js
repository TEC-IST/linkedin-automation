//paste this script into your javascript console to unfollow all entities (companies, public figures -- anyone/anything on screen with a 'following' label on the relevant button)
(async () => {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    while (true) {
        let unfollowButtons = Array.from(document.querySelectorAll('button'))
            .filter(button => button.innerText.trim().toLowerCase() === 'following');

        if (unfollowButtons.length === 0) {
            console.log("No more to unfollow.");
            break;
        }

        for (let button of unfollowButtons) {
            button.click();
            console.log(`Clicked unfollow`);
            await delay(500);

            // Wait for the confirmation pop-up (if any) and confirm unfollow
            let confirmButton = document.querySelector('.artdeco-button--primary');
            if (confirmButton) {
                confirmButton.click();
                console.log("Confirmed unfollow.");
                await delay(500);
            }
        }

        //TODO: implement querySelectorAll --> .filter --> button text contains 'show more' or similar

        //uncomment for 'infinite scroll' windows'
        //window.scrollBy(0, 500); // Scroll down to load more
        //await delay(2000); // Wait for new elements to load
    }
})();
