
/* Get the toggle */

const billingToggle =
    document.getElementById("billingToggle");


/* Get all price numbers */

const prices =
    document.querySelectorAll(".price strong");


/* Get /month and /year text */

const periods =
    document.querySelectorAll(".period");



/* Listen for toggle changes */

billingToggle.addEventListener(
    "change",
    function () {


        /* =========================================
           YEARLY
        ========================================= */

        if (this.checked) {


            prices.forEach(
                function (price) {

                    price.textContent =
                        price.getAttribute(
                            "data-yearly"
                        );

                }
            );


            periods.forEach(
                function (period) {

                    period.textContent =
                        "/year";

                }
            );

        }


        /* =========================================
           MONTHLY
        ========================================= */

        else {


            prices.forEach(
                function (price) {

                    price.textContent =
                        price.getAttribute(
                            "data-monthly"
                        );

                }
            );


            periods.forEach(
                function (period) {

                    period.textContent =
                        "/month";

                }
            );

        }

    }
);





/* =====================================================
   CATEGORY FILTER
===================================================== */


/* Get filter buttons */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


/* Get cards */

const cards =
    document.querySelectorAll(
        ".pricing-card"
    );



/* Add click event to buttons */

filterButtons.forEach(
    function (button) {


        button.addEventListener(
            "click",
            function () {


                /* =====================================
                   ACTIVE BUTTON
                ===================================== */

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );



                /* =====================================
                   GET SELECTED CATEGORY
                ===================================== */

                const selectedCategory =
                    this.getAttribute(
                        "data-filter"
                    );



                /* =====================================
                   SHOW / HIDE CARDS
                ===================================== */

                cards.forEach(
                    function (card) {


                        const cardCategory =
                            card.getAttribute(
                                "data-category"
                            );


                        /* SHOW ALL */

                        if (
                            selectedCategory ===
                            "all"
                        ) {

                            card.classList.remove(
                                "hidden"
                            );

                        }


                        /* SHOW SELECTED CATEGORY */

                        else if (
                            cardCategory ===
                            selectedCategory
                        ) {

                            card.classList.remove(
                                "hidden"
                            );

                        }


                        /* HIDE OTHER CATEGORY */

                        else {

                            card.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);





/* =====================================================
   CHOOSE PLAN BUTTON
===================================================== */


/* Get buttons */

const chooseButtons =
    document.querySelectorAll(
        ".choose-btn"
    );


/* Get message */

const selectionMessage =
    document.getElementById(
        "selectionMessage"
    );



/* Add click event */

chooseButtons.forEach(
    function (button) {


        button.addEventListener(
            "click",
            function () {


                /* Get card */

                const card =
                    this.closest(
                        ".pricing-card"
                    );


                /* Get plan name */

                const planName =
                    card.querySelector(
                        "h2"
                    ).textContent;


                /* Get current price */

                const currentPrice =
                    card.querySelector(
                        ".price strong"
                    ).textContent;


                /* Get current period */

                const currentPeriod =
                    card.querySelector(
                        ".period"
                    ).textContent;


                /* =================================
                   SHOW MESSAGE
                ================================= */

                selectionMessage.textContent =
                    "You selected " +
                    planName +
                    " — $" +
                    currentPrice +
                    currentPeriod;


                /* =================================
                   BUTTON MICRO INTERACTION
                ================================= */

                this.style.transform =
                    "scale(0.92)";


                setTimeout(
                    () => {

                        this.style.transform =
                            "";

                    },
                    150
                );


                /* =================================
                   REMOVE MESSAGE
                   AFTER 3 SECONDS
                ================================= */

                setTimeout(
                    function () {

                        selectionMessage.textContent =
                            "";

                    },
                    3000
                );

            }
        );

    }
);