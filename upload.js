async function analyzeBusiness() {

    const input = document.getElementById("businessData");

    if (!input) {

        Notifications.error("Business data field not found.");

        return;

    }

    const data = input.value.trim();

    if (!data) {

        Notifications.warning("Please enter your business data.");

        return;

    }

    try {

        Loader.show();

        Analytics.track("analysis_started");

        const result = await API.analyze(data);

        Storage.save(result);

        History.add(result);

        Analytics.track("analysis_completed");

        Router.go("result.html");

    } catch (error) {

        console.error(error);

        Notifications.error("Analysis failed.");

    } finally {

        Loader.hide();

    }

}