/**
 * Include the Jira Report Screen
 */

$(function () {

    jQuery.ajax({
        url: "https://issues.scribe.software/s/a08a94b409cc8e740289b39b85da16c3-T/en_USjtjiwm/64016/36/1.4.25/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=cf33aa12",
        type: "get",
        cache: false,
        dataType: "script"
    });

    window.ATL_JQ_PAGE_PROPS = $.extend(window.ATL_JQ_PAGE_PROPS, {
        triggerFunction: function(showCollectorDialog) {
            jQuery("#section_submit_bug").click(function(e) {
                e.preventDefault();
                showCollectorDialog();
            });
        },
        fieldValues: {
            'environment' : getUaExtendedJson(),
            'priority' : '4'
        }
    });

});
