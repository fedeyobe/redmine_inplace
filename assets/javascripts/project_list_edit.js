// $('document').ready(function () {
//     if ($('body').hasClass('controller-projects')) {
//         var project_api_key = localStorage.getItem("issue_table_api_key");
//         var custom_id;
//         var tdId = "";
//         $(document).ready(function () {
//             var pageConditionElementList = document.querySelector('.controller-projects.action-index .autoscroll');
//             if (pageConditionElementList) {
//                 var svg_pencil = `<svg width="12" height="14" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//        <path d="M19.6045 5.2808L17.8579 7.02704L13.8584 3.02715L15.6613 1.22427C16.112 0.773551 16.9568 0.773551 17.4642 1.22427L19.7173 3.47742C20.1114 3.98472 20.1114 4.77339 19.6045 5.28069L19.6045 5.2808Z" fill="#1D273C"/>
//        <path d="M1.46498 15.4773C3.15509 16.3221 4.56343 17.7304 5.40823 19.3644L0 20.8855L1.46498 15.4773ZM6.25313 18.6319C5.35171 16.9418 3.94336 15.4773 2.25325 14.632L13.0693 3.81592L17.0692 7.81581L6.25313 18.6319Z" fill="#1D273C"/>
//        </svg>`;

//                 //APPEND All PROJECT TD TEXT INSIDE SPAN TAG 
//                 var parentContainer = document.querySelector(
//                     ".controller-projects.action-index"
//                 );

//                 if (parentContainer) {
//                     var trackerCells = parentContainer.querySelectorAll(
//                         "td.short_description, td.homepage, td.int , td.string , td.date , td.list , td.user , td.float , td.bool , td.text , td.version"
//                     );
//                     // Iterate over each <td> element
//                     trackerCells.forEach(function (cell) {
//                         // Get the text content of the <td> element
//                         var trackerText = cell.textContent.trim();
//                         var spanElement = document.createElement("span");
//                         spanElement.classList.add("td_text");
//                         spanElement.textContent = trackerText;
//                         cell.innerHTML = "";
//                         cell.appendChild(spanElement);
//                     });
//                 }

//                 // /----------------------------------->

//                 $(".controller-projects.action-index .list.projects tr:not(.group.open) td").each(function (e) {
//                     if (permissionstatus === 'true') { // Check for edit permission
//                         if (
//                             !(
//                                 $(this).hasClass("is_public") ||
//                                 $(this).hasClass("identifier") ||
//                                 $(this).hasClass("created_on") ||
//                                 $(this).hasClass("updated_on") ||
//                                 $(this).hasClass("total_spent_time") ||
//                                 $(this).hasClass("divergent_hours") ||
//                                 $(this).hasClass("total_remaining_hours") ||
//                                 $(this).hasClass("approved_hours") ||
//                                 $(this).hasClass("total_estimated_time") ||
//                                 $(this).hasClass("status")
//                             )
//                         ) {
//                             $(this).append('<span class="edit-issue">' + svg_pencil + "</span>");
//                             $(".edit-issue").css("display", "none");
//                             $("td > span.edit-issue:only-child").css("margin-top", "-7px");
//                             $("td > span.td_text:empty").siblings("span.edit-issue").css("margin-top", "-3px");
//                         }
//                         $(this).hover(
//                             function () {
//                                 $(this).children(".edit-issue").css("display", "inline-block");
//                             },
//                             function () {
//                                 $(this).children(".edit-issue").hide();
//                             }
//                         );
//                     }
//                 });

//                 // date-format
//                 function changeFormat(date, date_formate) {
//                     if (date_formate === "DD/MM/YYYY") {
//                         const dateParts = date.split("/");
//                         const dd = String(parseInt(dateParts[0], 10)).padStart(2, "0");
//                         const mm = String(parseInt(dateParts[1], 10)).padStart(2, "0");
//                         const yyyy = String(parseInt(dateParts[2], 10));

//                         return `${yyyy}-${mm}-${dd}`;
//                     } else if (date_formate === "DD.MM.YYYY") {
//                         const dateParts = date.split(".");
//                         const dd = String(parseInt(dateParts[0], 10)).padStart(2, "0");
//                         const mm = String(parseInt(dateParts[1], 10)).padStart(2, "0");
//                         const yyyy = String(parseInt(dateParts[2], 10));

//                         return `${yyyy}-${mm}-${dd}`;
//                     } else if (date_formate === "DD-MM-YYYY") {
//                         const dateParts = date.split("-");
//                         const dd = String(parseInt(dateParts[0], 10)).padStart(2, "0");
//                         const mm = String(parseInt(dateParts[1], 10)).padStart(2, "0");
//                         const yyyy = String(parseInt(dateParts[2], 10));

//                         return `${yyyy}-${mm}-${dd}`;
//                     } else {
//                         var today = new Date(date);
//                         const dd = String(today.getDate()).padStart(2, "0");
//                         const mm = String(today.getMonth() + 1).padStart(2, "0");
//                         const yyyy = today.getFullYear();
//                         return `${yyyy}-${mm}-${dd}`;
//                     }
//                 }

//                 // Find all <span> elements containing the description text
//                 var descriptionSpans = document.querySelectorAll("td.short_description span.td_text");
//                 descriptionSpans.forEach(function (descriptionSpan) {
//                     var descriptionText = descriptionSpan.textContent;
//                     if (descriptionText.length > 300) {
//                         var trimmedText = descriptionText.substring(0, 300);
//                         trimmedText = trimmedText.replace(/\\.\\.\\.$/, '');
//                         var trimmedWithEllipsis = trimmedText + "...";
//                         descriptionSpan.textContent = trimmedWithEllipsis.replace(/\.\.+$/, '...');
//                     }
//                 });


//                 //  event handler for elements with the class .edit-issue
//                 var issueId;
//                 var currentTdClass;

//                 $(".edit-issue").on("click", function (e) {
//                     e.preventDefault();
//                     var currentRow = $(this).closest("tr");
//                     var currentColumn = $(this).closest("td");
//                     var Id = currentRow.attr("id");
//                     var projectIssueId = Id.split("-")[1];
//                     issueId = parseInt(projectIssueId);

//                     var clickedtd = $(this).closest("td").attr("class");
//                     var clickedtd_split = clickedtd.split(" ")[0];

//                     var cf_Id = clickedtd.substring(3, 5);

//                     if (tdId != "") {
//                         $(`#${tdId}`).remove();
//                         var data = tdId.split("-");
//                         $(`td#issue_${data[1]}_id-${data[3]}`).css("display", "revert");
//                     }

//                     // When click occurred outside table the input(editor) hide
//                     $(document).on("click", function (e) {
//                         var $target = $(e.target);
//                         if (!$target.closest("table").length) {
//                             // Click occurred outside table, remove tdId
//                             if (tdId != "") {
//                                 $(`#${tdId}`).remove();
//                                 var data = tdId.split("-");
//                                 $(`td#issue_${data[1]}_id-${data[3]}`).css("display", "revert");
//                                 tdId = "";
//                             }
//                         }
//                     });


//                     custom_id = parseInt(cf_Id);
//                     var rowId = currentRow.attr("id");
//                     tdId = `dynamic-${clickedtd_split}-edit-${issueId}`;

//                     var trId = $(this).closest("tr").attr('id');
//                     var trId = rowId;
//                     var regex = /-(\d+)/;
//                     var match = trId.match(regex);
//                     var project_id = match ? match[1] : null;

//                     $(currentRow)
//                         .find(currentColumn)
//                         .attr("id", `issue_${clickedtd_split}_id-${issueId}`);
//                     currentTdClass = $(this).closest("td").attr("id");

//                     project_name = currentRow.find("td.name").text();

//                     projectId = currentRow.find("td.id").text();

//                     $(".edit-issue").css("display", "none");

//                     $(`<td id=${tdId}></td>`).insertAfter("#" + currentTdClass);

//                     currentRow.find("td#" + currentTdClass).css("display", "none");
//                     $(this).css("display", "none");

//                     // ------------- name ----------------

//                     if (clickedtd == "name") {
//                         var get_project_text = currentRow.find("td.name a").text();
//                         $(`tr#${rowId} td#${tdId}`).append(
//                             `<input id="dynamic-edit-${currentTdClass}" size="40px" maxlength="255"  title="project name"
//                     placeholder="Enter name..." type="text" ></input>`
//                         );

//                         // $(`#dynamic-edit-${currentTdClass}`).val(get_project_text); // Set initial value
//                         let set_project_text = document.getElementById(
//                             `dynamic-edit-${currentTdClass}`
//                         );
//                         set_project_text.value = `${get_project_text}`;


//                         $(`#${tdId}`).on("keypress", function (e) {
//                             if (e.which == 13) {
//                                 var updatedName = $(`#dynamic-edit-${currentTdClass}`).val();
//                                 // Get the tr element's id
//                                 var trId = $(this).closest("tr").attr('id');
//                                 var regex = /-(\d+)/;
//                                 var match = trId.match(regex);
//                                 var project_id = match ? match[1] : null;

//                                 if (updatedName.trim() !== "") {
//                                     currentRow.find("td.name a").html(updatedName);
//                                 }
//                                 $(`#${tdId}`).remove();
//                                 $(`td#issue_name_id-${project_id}`).css("display", "revert");

//                                 var requestData = {
//                                     project: {
//                                         name: updatedName
//                                     }
//                                 };

//                                 $.ajax({
//                                     type: "PUT",
//                                     url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                     contentType: "application/json",
//                                     data: JSON.stringify(requestData),
//                                     success: function (result, status, xhr) {
//                                         console.log("Project name updated successfully");
//                                     },
//                                     error: function (xhr, status, error) {
//                                         console.log(
//                                             "Result: " +
//                                             status +
//                                             " " +
//                                             error +
//                                             " " +
//                                             xhr.status +
//                                             " " +
//                                             xhr.statusText
//                                         );
//                                     },
//                                 });
//                             }
//                         });
//                     }
//                     else if (clickedtd_split == "short_description") {
//                         var trId = $(this).closest("tr").attr('id');
//                         var regex = /-(\d+)/;
//                         var match = trId.match(regex);
//                         var project_id = match ? match[1] : null;
//                         var $this = $(this);

//                         if (project_id !== null && !isNaN(project_id)) {
//                             $.ajax({
//                                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                 type: "GET",
//                                 crossDomain: true,
//                                 dataType: "json",
//                                 success: function (data) {
//                                     var projectData = data.project;
//                                     var get_description_text = projectData.description;

//                                     $(`tr#${rowId} td#${tdId}`).append(
//                                         `<textarea id="dynamic-edit-${currentTdClass}" class="resizable" title="Issue description" placeholder="Enter description..." type="text" value="${get_description_text}"></textarea>`
//                                     );

//                                     var originalTextWithoutDots = get_description_text.trim().replace(/\\.\\.\\.?$/, "");
//                                     $(`#dynamic-edit-${currentTdClass}`).val(originalTextWithoutDots);

//                                     $(`#${tdId}`).on("keypress", function (e) {
//                                         if (e.which == 13) {
//                                             var updatedDescription = $(`#dynamic-edit-${currentTdClass}`).val();
//                                             if (updatedDescription.trim() !== "") {
//                                                 var displayText = updatedDescription.substring(0, 300);
//                                                 if (displayText.length === 300) {
//                                                     displayText += "...";
//                                                 }
//                                                 currentRow.find("td.short_description span.td_text").text(displayText.replace(/\\.\\.\\.?$/, '...'));

//                                                 // Update the projectData object with the new description
//                                                 projectData.description = updatedDescription;

//                                                 $.ajax({
//                                                     type: "PUT",
//                                                     url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                                     contentType: "application/json",
//                                                     data: JSON.stringify({ project: projectData }),
//                                                     success: function (result) {
//                                                     },
//                                                     error: function (xhr, status, error) {
//                                                         console.error("Error updating description:", error);
//                                                         console.log("Status:", status);
//                                                         console.log("Response:", xhr.responseText);
//                                                     }
//                                                 });
//                                             }

//                                             $(`#dynamic-edit-${currentTdClass}`).remove();
//                                             $(`td#issue_short_description_id-${issueId}`).css("display", "");
//                                             $(`#${tdId}`).remove(); // Remove the empty <td> element
//                                         }
//                                     });

//                                     $this.show();
//                                 },
//                                 error: function (xhr, status, error) {
//                                     console.error("Error fetching project data:", error);
//                                     console.log("Status:", status);
//                                     console.log("Response:", xhr.responseText);
//                                 }
//                             });
//                         } else {
//                             console.error('Invalid project_id:', project_id);
//                         }
//                     }

//                     // homepage
//                     else if (clickedtd == "homepage") {
//                         var get_homepage_text = currentRow.find("td.homepage span.td_text").html();
//                         $(`tr#${rowId} td#${tdId}`).append(
//                             `<input id="dynamic-edit-${currentTdClass}" size="65px" maxlength="255"  title="Issue homepage" placeholder="Enter text..." type="text" ></input>`
//                         );
//                         // $(`#dynamic-edit-${currentTdClass}`).val(get_homepage_text);

//                         let set_HomePage_text = document.getElementById(
//                             `dynamic-edit-${currentTdClass}`
//                         );

//                         set_HomePage_text.value = `${get_homepage_text}`;

//                         $(`#${tdId}`).on("keypress", function (e) {
//                             if (e.which == 13) {
//                                 var updatedHomepage = $(`#dynamic-edit-${currentTdClass}`).val();
//                                 var trId = $(this).closest("tr").attr('id');
//                                 var regex = /-(\d+)/;
//                                 var match = trId.match(regex);
//                                 var project_id = match ? match[1] : null;
//                                 if (updatedHomepage.trim() !== "") {
//                                     currentRow.find("td.homepage span.td_text").html(updatedHomepage);
//                                 }

//                                 $(`#${tdId}`).remove();
//                                 $(`td#issue_homepage_id-${issueId}`).css("display", "revert");

//                                 var content1 = {
//                                     project: {
//                                         homepage: updatedHomepage
//                                     }
//                                 };
//                                 $.ajax({
//                                     type: "PUT",
//                                     url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                     contentType: "application/json",
//                                     data: JSON.stringify(content1),
//                                     success: function (result, status, xhr) {
//                                         console.log("Result:", result);
//                                     },
//                                     error: function (xhr, status, error) {
//                                         console.log(
//                                             "Result: " +
//                                             status +
//                                             " " +
//                                             error +
//                                             " " +
//                                             xhr.status +
//                                             " " +
//                                             xhr.statusText
//                                         );
//                                         var response = JSON.parse(xhr.responseText);
//                                         toastr["error"](response.errors.join(", "));
//                                     },
//                                 });
//                             }
//                         });

//                         // Show the edit icon again
//                         $(this).closest('td').find('.edit-issue').show();
//                     }

//                     // ------------- Subproject Project ----------------

//                     if (clickedtd_split == "parent_id") {
//                         appendnameDropdown(rowId, currentTdClass, project_id);
//                         var currentTdClass;

//                         $(`#${tdId}`).on("change", function () {
//                             var select_project;
//                             var issue_project_id;
//                             select_project = $("#project_project-" + project_id)
//                                 .find("option:selected");
//                             issue_project_id = $("#project_project-" + project_id)
//                                 .find("option:selected")
//                                 .val();
//                             currentRow.find("td.parent_id a").html(select_project);
//                             $(`#${tdId}`).remove();
//                             $(`tr td#issue_parent_id_id-${project_id}`).css("display", "revert");

//                             var content1 = {
//                                 project_id: parseInt(issue_project_id),
//                             };
//                             jQuery.ajax({
//                                 type: "PUT",
//                                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                 dataType: "json",
//                                 contentType: "application/json",
//                                 data: JSON.stringify({

//                                     project: content1,
//                                 }),

//                                 success: function (result, status, xhr) {
//                                     // location.reload();
//                                     $("#project_project-" + project_id).val(issue_project_id);
//                                 },

//                                 error: function (xhr, status, error) {
//                                     console.log(
//                                         "Result: " +
//                                         status +
//                                         " " +
//                                         error +
//                                         " " +
//                                         xhr.status +
//                                         " " +
//                                         xhr.statusText
//                                     );
//                                 },
//                             });
//                         });
//                     }


//                     // Custom form String
//                     else if (clickedtd === `cf_${custom_id} string`) {
//                         var trId = $(this).closest("tr").attr('id');
//                         var regex = /-(\d+)/;
//                         var match = trId.match(regex);
//                         var project_id = match ? match[1] : null;
//                         $.ajax({
//                             type: "GET",
//                             url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                             dataType: "json",
//                             contentType: "application/json",
//                             success: function (data, status, xhr) {
//                                 var c_f_issues_ids = data.project.custom_fields;
//                                 var cs_failed = true;
//                                 for (var i = 0; i < c_f_issues_ids.length; i++) {
//                                     var customFieldId = c_f_issues_ids[i].id;
//                                     if (customFieldId == custom_id) {
//                                         cs_failed = false;
//                                         var get_cf_id_text = currentRow.find(`td.cf_${custom_id}`).text();
//                                         $(`tr#${rowId} td#${tdId}`).append(
//                                             `<input size="65px" id="dynamic-edit-${currentTdClass}" maxlength="255" title="Issue custom field"
//                                     placeholder="Enter custom field text..." type="text">`
//                                         );
//                                         let set_cf_id_text = document.getElementById(
//                                             `dynamic-edit-${currentTdClass}`
//                                         );
//                                         set_cf_id_text.value = `${get_cf_id_text}`;
//                                         $(`.dynamic-edit-${currentTdClass}`);

//                                         $(`#${tdId}`).on("keypress", function (e) {
//                                             if (e.which == 13) {
//                                                 var custom_field_array = [];
//                                                 var cf_value = $(`#dynamic-edit-${currentTdClass}`).val();
//                                                 currentRow
//                                                     .find(`td.cf_${custom_id} span.td_text`)
//                                                     .html(cf_value);
//                                                 $(`#${tdId}`).remove();
//                                                 $(`td#issue_cf_${custom_id}_id-${issueId}`).css(
//                                                     "display",
//                                                     "revert"
//                                                 );
//                                                 custom_field_array.push({
//                                                     id: custom_id,
//                                                     value: `${cf_value}`,
//                                                 });

//                                                 var content1 = {
//                                                     custom_fields: custom_field_array,
//                                                 };

//                                                 $.ajax({
//                                                     type: "PUT",
//                                                     url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                                     dataType: "json",
//                                                     contentType: "application/json",
//                                                     data: JSON.stringify({
//                                                         project: content1,

//                                                     }),
//                                                     success: function (result, status, xhr) {
//                                                         console.log("Result:", result);
//                                                     },
//                                                     error: function (xhr, status, error) {
//                                                         if (xhr.status == 422) {
//                                                             let content = JSON.parse(xhr.responseText).errors;

//                                                             toastr["error"](content);
//                                                         }
//                                                     },
//                                                 });
//                                             }
//                                         });
//                                         break;
//                                     } else {
//                                         cs_failed = true;
//                                     }

//                                 }
//                                 if (cs_failed == true) {
//                                     toastr["error"]("This custom field is not belong to this issue");
//                                 }
//                             },
//                             error: function (xhr, status, error) {
//                                 console.error("Error:", error);
//                             }
//                         });
//                     }

//                     //Custom Float Type
//                     else if (clickedtd === `cf_${custom_id} float`) {
//                         $.ajax({
//                             type: "GET",
//                             url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                             dataType: "json",
//                             contentType: "application/json",
//                             success: function (data, status, xhr, textStatus, jqXHR) {
//                                 var projectt = data.project.custom_fields;
//                                 for (var i = 0; i < projectt.length; i++) {
//                                     var customFieldId = projectt[i].id;
//                                     if (customFieldId == custom_id) {
//                                         cs_falid = false;
//                                         var get_cf_id_text = currentRow.find(`td.cf_${custom_id}`).text();

//                                         $(`tr#${rowId} td#${tdId}`).append(
//                                             `<input size="6" id="dynamic-edit-${currentTdClass}" title="Issue custom field"
//                                     placeholder="Enter only decimal number..." type="number" >`
//                                         );
//                                         let set_cf_id_text = document.getElementById(
//                                             `dynamic-edit-${currentTdClass}`
//                                         );
//                                         set_cf_id_text.value = `${get_cf_id_text}`;
//                                         $(`.dynamic-edit-${currentTdClass}`);

//                                         $(`#${tdId}`).on("keypress", function (e) {
//                                             if (e.which == 13) {
//                                                 var custom_field_array = [];
//                                                 var cf_value = $(`#dynamic-edit-${currentTdClass}`).val();
//                                                 currentRow
//                                                     .find(`td.cf_${custom_id} a.td_text`)
//                                                     .html(cf_value);
//                                                 $(`#${tdId}`).remove();
//                                                 $(`td#issue_cf_${custom_id}_id-${issueId}`).css(
//                                                     "display",
//                                                     "revert"
//                                                 );

//                                                 custom_field_array.push({
//                                                     id: custom_id,
//                                                     value: cf_value,
//                                                 });

//                                                 var content1 = {
//                                                     custom_fields: custom_field_array,
//                                                 };

//                                                 $.ajax({
//                                                     type: "PUT",
//                                                     url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                                     dataType: "json",
//                                                     contentType: "application/json",
//                                                     data: JSON.stringify({
//                                                         project: content1,
//                                                     }),
//                                                     success: function (data, status, xhr) {
//                                                         console.log(xhr.status);
//                                                     },
//                                                     error: function (xhr, status, error) {
//                                                         if (xhr.status == 422) {
//                                                             let content = JSON.parse(xhr.responseText).errors;
//                                                             toastr["error"](content);
//                                                         }
//                                                     },
//                                                 });
//                                             }
//                                         });
//                                         break;
//                                     } else {
//                                         cs_falid = true;
//                                     }
//                                 }
//                                 if (cs_falid == true) {
//                                     toastr["error"]("This custom field is not belong to this issue.");
//                                 }
//                             },
//                             error: function (xhr, jqXHR, status, error) {
//                                 console.log(jqXHR, "status");
//                             },
//                         });
//                     }

//                     //Custom Integer Type
//                     else if (clickedtd === `cf_${custom_id} int`) {
//                         $.ajax({
//                             type: "GET",
//                             url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                             dataType: "json",
//                             contentType: "application/json",
//                             success: function (data, status, xhr) {
//                                 var c_f_issues_ids = data.project.custom_fields;
//                                 for (var i = 0; i < c_f_issues_ids.length; i++) {
//                                     var customFieldId = c_f_issues_ids[i].id;
//                                     if (customFieldId == custom_id) {
//                                         cs_falid = false;
//                                         var get_cf_id_text = currentRow.find(`td.cf_${custom_id}`).text();

//                                         $(`tr#${rowId} td#${tdId}`).append(
//                                             `<input size="6" id="dynamic-edit-${currentTdClass}" title="Issue custom field"
//                                     placeholder="Enter only integer number..." type="number" >`
//                                         );
//                                         let set_cf_id_text = document.getElementById(
//                                             `dynamic-edit-${currentTdClass}`
//                                         );
//                                         set_cf_id_text.value = `${get_cf_id_text}`;
//                                         $(`.dynamic-edit-${currentTdClass}`);

//                                         $(`#${tdId}`).on("keypress", function (e) {
//                                             if (e.which == 13) {
//                                                 var custom_field_array = [];
//                                                 var cf_value = $(`#dynamic-edit-${currentTdClass}`).val();
//                                                 currentRow
//                                                     .find(`td.cf_${custom_id} span.td_text`)
//                                                     .html(cf_value);
//                                                 $(cf_value).append(get_cf_id_text);
//                                                 $(`#${tdId}`).remove();
//                                                 $(`td#issue_cf_${custom_id}_id-${issueId}`).css(
//                                                     "display",
//                                                     "revert"
//                                                 );

//                                                 custom_field_array.push({
//                                                     id: custom_id,
//                                                     value: cf_value,
//                                                 });

//                                                 var content1 = {
//                                                     custom_fields: custom_field_array,
//                                                 };

//                                                 $.ajax({
//                                                     type: "PUT",
//                                                     url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                                     dataType: "json",
//                                                     contentType: "application/json",
//                                                     data: JSON.stringify({
//                                                         project: content1,
//                                                     }),
//                                                     success: function (result, status, xhr) {
//                                                         // location.reload();
//                                                     },
//                                                     error: function (xhr, status, error) {
//                                                         if (xhr.status == 422) {
//                                                             let content = JSON.parse(xhr.responseText).errors;

//                                                             toastr["error"](content);
//                                                         }
//                                                     },
//                                                 });
//                                             }
//                                         });
//                                         break;
//                                     } else {
//                                         cs_falid = true;
//                                     }
//                                 }
//                                 if (cs_falid == true) {
//                                     toastr["error"]("This custom field is not belong to this issue");
//                                 }
//                             },
//                             error: function (xhr, status, error) { },
//                         });
//                     }

//                     //Custom Long text
//                     else if (clickedtd === `cf_${custom_id} text`) {
//                         $.ajax({
//                             type: "GET",
//                             url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`, dataType: "json",
//                             contentType: "application/json",
//                             success: function (data, status, xhr) {
//                                 var c_f_issues_ids = data.project.custom_fields;
//                                 for (var i = 0; i < c_f_issues_ids.length; i++) {
//                                     var customFieldId = c_f_issues_ids[i].id;
//                                     if (customFieldId == custom_id) {
//                                         cs_falid = false;
//                                         var get_cf_id_text = currentRow.find(`td.cf_${custom_id}`).text();

//                                         $(`tr#${rowId} td#${tdId}`).append(
//                                             `<input size="15" id="dynamic-edit-${currentTdClass}" maxlength="255" title="Issue custom field"
//                                     placeholder="Enter custom field text..." type="text" >`
//                                         );
//                                         let set_cf_id_text = document.getElementById(
//                                             `dynamic-edit-${currentTdClass}`
//                                         );
//                                         set_cf_id_text.value = `${get_cf_id_text}`;
//                                         $(`.dynamic-edit-${currentTdClass}`);

//                                         $(`#${tdId}`).on("keypress", function (e) {
//                                             if (e.which == 13) {
//                                                 var custom_field_array = [];
//                                                 var cf_value = $(`#dynamic-edit-${currentTdClass}`).val();
//                                                 currentRow
//                                                     .find(`td.cf_${custom_id} span.td_text`)
//                                                     .html(cf_value);
//                                                 // $(cf_value).append(get_cf_id_text);
//                                                 $(`#${tdId}`).remove();
//                                                 $(`td#issue_cf_${custom_id}_id-${issueId}`).css(
//                                                     "display",
//                                                     "revert"
//                                                 );

//                                                 custom_field_array.push({
//                                                     id: custom_id,
//                                                     value: `${cf_value}`,
//                                                 });

//                                                 var content1 = {
//                                                     custom_fields: custom_field_array,
//                                                 };

//                                                 $.ajax({
//                                                     type: "PUT",
//                                                     url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                                     dataType: "json",
//                                                     contentType: "application/json",
//                                                     data: JSON.stringify({
//                                                         project: content1,
//                                                     }),
//                                                     success: function (result, status, xhr) {
//                                                         // location.reload();
//                                                     },
//                                                     error: function (xhr, status, error) {
//                                                         if (xhr.status == 422) {
//                                                             let content = JSON.parse(xhr.responseText).errors;

//                                                             toastr["error"](content);
//                                                         }
//                                                     },
//                                                 });
//                                             }
//                                         });
//                                         break;
//                                     } else {
//                                         cs_falid = true;
//                                     }
//                                 }
//                                 if (cs_falid == true) {
//                                     toastr["error"]("This custom field is not belong to this project");
//                                 }
//                             },
//                             error: function (xhr, status, error) { },
//                         });
//                     }

//                     //Custom User Type
//                     else if (clickedtd == `cf_${custom_id} user`) {
//                         // var currentRow;
//                         $.ajax({
//                             type: "GET",
//                             url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                             dataType: "json",
//                             contentType: "application/json",
//                             success: function (data, status, xhr) {
//                                 var c_f_issues_ids = data.project.custom_fields;
//                                 for (var i = 0; i < c_f_issues_ids.length; i++) {
//                                     var customFieldId = c_f_issues_ids[i].id;
//                                     if (customFieldId == custom_id) {
//                                         cs_falid = false;
//                                         appendAssigneeProjectList(rowId, currentTdClass, issueId, project_id);
//                                         var currentTdClass;

//                                         var assigned_to_update;

//                                         $(`#${tdId}`).on("change", function () {
//                                             var custom_field_array = [];
//                                             // var get_cf_id_text = currentRow.find(`td.cf_${custom_id} a`).text();

//                                             var select_cf_user;
//                                             var select_cf_user_id;
//                                             select_cf_user = $("#assignee_to_project-" + project_id)
//                                                 .find("option:selected")
//                                                 .html();
//                                             select_cf_user_id = $("#assignee_to_project-" + project_id)
//                                                 .find("option:selected")
//                                                 .val();

//                                             var customSpan = currentRow.find(`td.cf_${custom_id} span.td_text`);

//                                             if (customSpan.length > 0) {
//                                                 customSpan.html(select_cf_user);
//                                                 if (customSpan.text().trim() === "") {
//                                                     currentRow.find(`td.cf_${custom_id} span.edit-issue`).attr("style", "margin-top: -7px; display:none");
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.edit-issue`).attr("style", "margin-top: 0px; display:none");
//                                                 }
//                                             } else {
//                                                 currentRow.find(`td.cf_${custom_id}`).prepend(`<span class="td_text">${select_cf_user}</span>`);
//                                                 currentRow.find(`td.cf_${custom_id} span.edit-issue`).attr("style", "margin-top: 0px; display:none");
//                                             }


//                                             // $("select").css("display", "none");
//                                             $(`#${tdId}`).remove();
//                                             $(`td#issue_cf_${custom_id}_id-${issueId}`).css(
//                                                 "display",
//                                                 "revert"
//                                             );

//                                             //  ----------------- update values -------------------------

//                                             custom_field_array.push({
//                                                 id: custom_id,
//                                                 value: `${select_cf_user_id}`,
//                                             });

//                                             var content1 = {
//                                                 custom_fields: custom_field_array,
//                                             };

//                                             $.ajax({
//                                                 type: "PUT",
//                                                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                                 dataType: "json",
//                                                 contentType: "application/json",
//                                                 data: JSON.stringify({
//                                                     project: content1,
//                                                 }),
//                                                 success: function (result, status, xhr) {
//                                                     // location.reload();
//                                                 },
//                                                 error: function (xhr, status, error) {
//                                                     console.log(
//                                                         "Result: " +
//                                                         status +
//                                                         " " +
//                                                         error +
//                                                         " " +
//                                                         xhr.status +
//                                                         " " +
//                                                         xhr.statusText
//                                                     );
//                                                 },
//                                             });
//                                         });
//                                         break;
//                                     } else {
//                                         cs_falid = true;
//                                     }
//                                 }
//                                 if (cs_falid == true) {
//                                     toastr["error"]("This custom field is not belong to this project");
//                                 }
//                             },
//                             error: function (xhr, status, error) { },
//                         });
//                     }

//                     //Custom Link Type
//                     else if (clickedtd === `cf_${custom_id} link`) {
//                         $.ajax({
//                             type: "GET",
//                             url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                             dataType: "json",
//                             contentType: "application/json",
//                             success: function (data, status, xhr) {
//                                 var c_f_issues_ids = data.project.custom_fields;
//                                 for (var i = 0; i < c_f_issues_ids.length; i++) {
//                                     var customFieldId = c_f_issues_ids[i].id;
//                                     if (customFieldId == custom_id) {
//                                         cs_falid = false;
//                                         var get_cf_id_text = currentRow
//                                             .find(`td.cf_${custom_id} a`)
//                                             .text();

//                                         $(`tr#${rowId} td#${tdId}`).append(
//                                             `<input size="15" id="dynamic-edit-${currentTdClass}" title="Issue custom field"
//                                     placeholder="Enter http address..." type="text" >`
//                                         );
//                                         let set_cf_id_text = document.getElementById(
//                                             `dynamic-edit-${currentTdClass}`
//                                         );
//                                         set_cf_id_text.value = `${get_cf_id_text}`;
//                                         $(`.dynamic-edit-${currentTdClass}`);

//                                         $(`#${tdId}`).on("keypress", function (e) {
//                                             if (e.which == 13) {
//                                                 var custom_field_array = [];
//                                                 var cf_value = $(`#dynamic-edit-${currentTdClass}`).val();
//                                                 currentRow.find(`td.cf_${custom_id} a`).html(cf_value);
//                                                 $(`#${tdId}`).remove();
//                                                 $(`td#issue_cf_${custom_id}_id-${issueId}`).css(
//                                                     "display",
//                                                     "revert"
//                                                 );

//                                                 custom_field_array.push({
//                                                     id: custom_id,
//                                                     value: `${cf_value}`,
//                                                 });

//                                                 var content1 = {
//                                                     custom_fields: custom_field_array,
//                                                 };

//                                                 $.ajax({
//                                                     type: "PUT",
//                                                     url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                                     dataType: "json",
//                                                     contentType: "application/json",
//                                                     data: JSON.stringify({
//                                                         project: content1,
//                                                     }),
//                                                     success: function (result, status, xhr) {
//                                                         // location.reload();
//                                                     },
//                                                     error: function (xhr, status, error) {
//                                                         if (xhr.status == 422) {
//                                                             let content = JSON.parse(xhr.responseText).errors;

//                                                             toastr["error"](content);
//                                                         }
//                                                     },
//                                                 });
//                                             }
//                                         });
//                                         break;
//                                     } else {
//                                         cs_falid = true;
//                                     }
//                                 }
//                                 if (cs_falid == true) {
//                                     toastr["error"]("This custom field is not belong to this project.");
//                                 }
//                             },
//                             error: function (xhr, status, error) { },
//                         });
//                     }

//                     //Custom Integer Type


//                     // Custom Date Type
//                     else if (clickedtd === `cf_${custom_id} date`) {
//                         var trId = $(this).closest("tr").attr('id');
//                         var regex = /-(\d+)/;
//                         var match = trId.match(regex);
//                         var project_id = match ? match[1] : null;
//                         $.ajax({
//                             type: "GET",
//                             url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                             dataType: "json",
//                             contentType: "application/json",
//                             success: function (data, status, xhr) {
//                                 var c_f_issues_ids = data.project.custom_fields;
//                                 for (var i = 0; i < c_f_issues_ids.length; i++) {
//                                     var customFieldId = c_f_issues_ids[i].id;
//                                     if (customFieldId == custom_id) {
//                                         cs_falid = false;
//                                         var get_cf_id_text = currentRow
//                                             .find(`td.cf_${custom_id}`)
//                                             .text()
//                                             .split("\n")[0];
//                                         var cf_date = changeFormat(get_cf_id_text, selected_date_format);

//                                         $(`tr#${rowId} td#${tdId}`).append(
//                                             `<input id="dynamic-edit-${currentTdClass}" type="date" >`
//                                         );
//                                         let set_cf_id_text = document.getElementById(
//                                             `dynamic-edit-${currentTdClass}`
//                                         );
//                                         set_cf_id_text.value = `${cf_date}`;

//                                         $(`#${tdId}`).on("change", function (e) {
//                                             var custom_field_array = [];
//                                             var cf_value = $(`#dynamic-edit-${currentTdClass}`).val();
//                                             if (selected_date_format === "YYYY-MM-DD") {
//                                                 if (cf_value) {
//                                                     var dateParts = cf_value.split("-");
//                                                     var changeDateFormate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormate);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             } else if (selected_date_format === "DD/MM/YYYY") {
//                                                 if (cf_value) {
//                                                     var dateParts = cf_value.split("-");
//                                                     var changeDateFormate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormate);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             } else if (selected_date_format === "MM/DD/YYYY") {
//                                                 if (cf_value) {
//                                                     var dateParts = cf_value.split("-");
//                                                     var changeDateFormate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormate);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             } else if (selected_date_format === "DD-MM-YYYY") {
//                                                 if (cf_value) {
//                                                     var dateParts = cf_value.split("-");
//                                                     var changeDateFormate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormate);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             } else if (selected_date_format === "MM/DD/YYYY") {
//                                                 if (cf_value) {
//                                                     var dateParts = cf_value.split("-");
//                                                     var changeDateFormate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormate);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             } else if (selected_date_format === "DD %b YYYY") {
//                                                 if (cf_value) {
//                                                     var dateObj = new Date(cf_value);
//                                                     var day = dateObj.getDate();
//                                                     var month = dateObj.toLocaleString("en-us", {
//                                                         month: "short",
//                                                     });
//                                                     var year = dateObj.getFullYear();
//                                                     var changeDateFormat = `${day} ${month} ${year}`;
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormat);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             } else if (selected_date_format === "DD %B YYYY") {
//                                                 if (cf_value) {
//                                                     var dateObj = new Date(cf_value);
//                                                     var day = dateObj.getDate();
//                                                     var month = dateObj.toLocaleString("en-us", {
//                                                         month: "long",
//                                                     });
//                                                     var year = dateObj.getFullYear();
//                                                     var changeDateFormat = `${day} ${month} ${year}`;
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormat);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             } else if (selected_date_format === "%b DD, YYYY") {
//                                                 if (cf_value) {
//                                                     var dateObj = new Date(cf_value);
//                                                     var options = {
//                                                         year: "numeric",
//                                                         month: "short",
//                                                         day: "numeric",
//                                                     };
//                                                     var changeDateFormat = dateObj.toLocaleDateString(
//                                                         "en-US",
//                                                         options
//                                                     );
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormat);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             } else if (selected_date_format === "%B DD, YYYY") {
//                                                 if (cf_value) {
//                                                     var dateObj = new Date(cf_value);
//                                                     var options = {
//                                                         year: "numeric",
//                                                         month: "long",
//                                                         day: "numeric",
//                                                     };
//                                                     var changeDateFormat = dateObj.toLocaleDateString(
//                                                         "en-US",
//                                                         options
//                                                     );
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormat);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             } else if (selected_date_format === "DD.MM.YYYY") {
//                                                 if (cf_value) {
//                                                     var dateParts = cf_value.split("-");
//                                                     var changeDateFormat = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
//                                                     currentRow
//                                                         .find(`td.cf_${custom_id} span.td_text`)
//                                                         .html(changeDateFormat);
//                                                 } else {
//                                                     currentRow.find(`td.cf_${custom_id} span.td_text`).html("");
//                                                 }
//                                             }

//                                             $(cf_value).append(get_cf_id_text);
//                                             $(`#${tdId}`).remove();
//                                             $(`td#issue_cf_${custom_id}_id-${issueId}`).css(
//                                                 "display",
//                                                 "revert"
//                                             );

//                                             custom_field_array.push({
//                                                 id: custom_id,
//                                                 value: `${cf_value}`,
//                                             });

//                                             var content1 = {
//                                                 custom_fields: custom_field_array,
//                                             };

//                                             $.ajax({
//                                                 type: "PUT",
//                                                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                                 dataType: "json",
//                                                 contentType: "application/json",
//                                                 data: JSON.stringify({
//                                                     project: content1,
//                                                 }),
//                                                 success: function (result, status, xhr) {
//                                                     // location.reload();
//                                                 },
//                                                 error: function (xhr, status, error) {
//                                                     console.log(
//                                                         "Result: " +
//                                                         status +
//                                                         " " +
//                                                         error +
//                                                         " " +
//                                                         xhr.status +
//                                                         " " +
//                                                         xhr.statusText
//                                                     );
//                                                 },
//                                             });
//                                         });
//                                         break;
//                                     } else {
//                                         cs_falid = true;
//                                     }
//                                 }
//                                 if (cs_falid == true) {
//                                     toastr["error"]("This custom field is not belong to this project");
//                                 }
//                             },
//                             error: function (xhr, status, error) { },
//                         });
//                     }

//                     //Custom boolean Type
//                     else if (clickedtd === `cf_${custom_id} bool`) {
//                         getCustomData(rowId, currentTdClass, project_id, issueId);
//                         $(`#${tdId}`).on("change", function () {
//                             var custom_field_array = [];

//                             var select_cf_list;
//                             var select_cf_list_id;
//                             select_cf_list = $("#cf_bool_project" + project_id)
//                                 .find("option:selected")
//                                 .html();
//                             select_cf_list_id = $("#cf_bool_project-" + project_id)
//                                 .find("option:selected")
//                                 .text();
//                             currentRow.find(`td.cf_${custom_id} span.td_text`).html(select_cf_list);

//                             $(`#${tdId}`).remove();
//                             $(`td#issue_cf_${custom_id}_id-${project_id}`).css("display", "revert");


//                             custom_field_array.push({
//                                 id: custom_id,
//                                 value: `${select_cf_list_id}`,
//                             });

//                             var content1 = {
//                                 custom_fields: custom_field_array,
//                             };

//                             $.ajax({
//                                 type: "PUT",
//                                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                 dataType: "json",
//                                 contentType: "application/json",
//                                 data: JSON.stringify({
//                                     project: content1,
//                                 }),
//                                 success: function (result, status, xhr) {
//                                     //  location.reload();
//                                 },
//                                 error: function (xhr, status, error) {
//                                     console.log(
//                                         "Result: " +
//                                         status +
//                                         " " +
//                                         error +
//                                         " " +
//                                         xhr.status +
//                                         " " +
//                                         xhr.statusText
//                                     );
//                                 },
//                             });
//                         });

//                     }

//                     //project custom versions
//                     else if (clickedtd == `cf_${custom_id} version`) {
//                         $.ajax({
//                             type: "GET",
//                             url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                             dataType: "json",
//                             contentType: "application/json",
//                             success: function (data, status, xhr) {
//                                 var c_f_issues_ids = data.project.custom_fields;
//                                 for (var i = 0; i < c_f_issues_ids.length; i++) {
//                                     var customFieldId = c_f_issues_ids[i].id;
//                                     if (customFieldId == custom_id) {
//                                         cs_falid = false;
//                                         versionDropdown(rowId, currentTdClass, projectId, project_id);
//                                         var currentTdClass;
//                                         // var currentRow;
//                                         $(`#${tdId}`).on("change", function () {
//                                             var custom_field_array = [];

//                                             var select_cf_version;
//                                             var select_cf_version_id;
//                                             select_cf_version = $("#version_project-" + project_id)
//                                                 .find("option:selected")
//                                                 .html();
//                                             select_cf_version_id = $("#version_project-" + project_id)
//                                                 .find("option:selected")
//                                                 .val();

//                                             currentRow
//                                                 .find(`td.cf_${custom_id} span.td_text`)
//                                                 .html(select_cf_version);
//                                             $(`#${tdId}`).remove();
//                                             $(`td#issue_cf_${custom_id}_id-${project_id}`).css(
//                                                 "display",
//                                                 "revert"
//                                             );

//                                             custom_field_array.push({
//                                                 id: custom_id,
//                                                 value: select_cf_version_id,
//                                             });
//                                             var content1 = {
//                                                 custom_fields: custom_field_array,
//                                             };
//                                             $.ajax({
//                                                 type: "PUT",
//                                                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                                 dataType: "json",
//                                                 contentType: "application/json",
//                                                 data: JSON.stringify({
//                                                     project: content1,
//                                                 }),
//                                                 success: function (result, status, xhr) {
//                                                     // location.reload();
//                                                 },
//                                                 error: function (xhr, status, error) {
//                                                     console.log(
//                                                         "Result: " +
//                                                         status +
//                                                         " " +
//                                                         error +
//                                                         " " +
//                                                         xhr.status +
//                                                         " " +
//                                                         xhr.statusText
//                                                     );
//                                                 },
//                                             });
//                                         });
//                                         break;
//                                     } else {
//                                         cs_falid = true;
//                                     }
//                                 }
//                                 if (cs_falid == true) {
//                                     toastr["error"]("This custom field is not belong to this project");
//                                 }
//                             },
//                             error: function (xhr, status, error) { },
//                         });
//                     }
//                     // Custom List Type
//                     else if (clickedtd === `cf_${custom_id} list`) {
//                         getCustomData(rowId, currentTdClass, issueId, project_id);

//                         $(`#${tdId}`).on("change", function () {
//                             var custom_field_array = [];

//                             var select_cf_list;
//                             var select_cf_list_id;
//                             select_cf_list = $("#cf_list_project-" + issueId)
//                                 .find("option:selected")
//                                 .html();
//                             select_cf_list_id = $("#cf_list_project-" + issueId)
//                                 .find("option:selected")
//                                 .text();
//                             currentRow.find(`td.cf_${custom_id} span.td_text`).html(select_cf_list);
//                             $(`#${tdId}`).remove();
//                             $(`td#issue_cf_${custom_id}_id-${issueId}`).css("display", "revert");

//                             custom_field_array.push({
//                                 id: custom_id,
//                                 value: `${select_cf_list_id}`,
//                             });

//                             var content1 = {
//                                 custom_fields: custom_field_array,
//                             };

//                             $.ajax({
//                                 type: "PUT",
//                                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                                 dataType: "json",
//                                 contentType: "application/json",
//                                 data: JSON.stringify({
//                                     project: content1,
//                                 }),
//                                 success: function (result, status, xhr) {
//                                     // location.reload();
//                                 },
//                                 error: function (xhr, status, error) {
//                                     console.log(
//                                         "Result: " +
//                                         status +
//                                         " " +
//                                         error +
//                                         " " +
//                                         xhr.status +
//                                         " " +
//                                         xhr.statusText
//                                     );
//                                 },
//                             });
//                         });
//                     }

//                 });
//             }

//             var pageConditionElementBlock = document.querySelector('.controller-projects.action-index #projects-index');
//             if (pageConditionElementBlock) {
//                 var svg_pencils = `<svg width="12" height="14" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//        <path d="M19.6045 5.2808L17.8579 7.02704L13.8584 3.02715L15.6613 1.22427C16.112 0.773551 16.9568 0.773551 17.4642 1.22427L19.7173 3.47742C20.1114 3.98472 20.1114 4.77339 19.6045 5.28069L19.6045 5.2808Z" fill="#1D273C"/>
//        <path d="M1.46498 15.4773C3.15509 16.3221 4.56343 17.7304 5.40823 19.3644L0 20.8855L1.46498 15.4773ZM6.25313 18.6319C5.35171 16.9418 3.94336 15.4773 2.25325 14.632L13.0693 3.81592L17.0692 7.81581L6.25313 18.6319Z" fill="#1D273C"/>
//        </svg>`;

//                 //APPEND All PROJECT TD TEXT INSIDE SPAN TAG
//                 var parentContainerBlock = document.querySelector(".controller-projects.action-index #projects-index");
//                 if (parentContainerBlock) {
//                     var trackerBlock = parentContainerBlock.querySelectorAll("div a.public, div.custom-details div:not(.project-members, .issues-info, .issues-info .progress-bar, .issues-info .progress-bar .progress, .issues-info .progress-bar .progress , .issues-info .progress-bar .progress .progress_result)");
//                     trackerBlock.forEach(function (a) {
//                         var divText = a.textContent.trim();
//                         var spanElement = document.createElement("span");
//                         spanElement.classList.add("div_text");
//                         spanElement.textContent = divText;
//                         a.innerHTML = "";
//                         a.appendChild(spanElement);
//                     });
//                 }


//                 // Function to show edit issue icon (check permission before showing)
//                 function showEditIssueIcon(element) {
//                     if (permissionstatus === 'true') {  // Check permission first
//                         if (!element.find(".testInput").is(":visible")) {
//                             if (!element.find(".edit-issue").length) {
//                                 element.append('<span class="edit-issue">' + svg_pencils + "</span>");
//                             }
//                             element.find(".edit-issue").css("display", "inline-block");
//                         }
//                     }
//                 }

//                 // Function to hide edit issue icon
//                 function hideEditIssueIcon(element) {
//                     element.find(".edit-issue").css("display", "none");
//                 }

//                 // Hover event for a.project
//                 $("a.project.root.leaf.public , a.project.root.parent.public").hover(
//                     function () {
//                         if (!$(this).find(".testInput").is(":focus") && permissionstatus === 'true') {
//                             showEditIssueIcon($(this));
//                         }
//                     },
//                     function () {
//                         if (!$(this).find(".testInput").is(":focus")) {
//                             hideEditIssueIcon($(this));
//                         }
//                     }
//                 );

//                 // When hovering over an input field
//                 $('.testInput').on('mouseenter', function () {
//                     $(this).prev('.edit-issue').css('display', 'none');
//                 }).on('mouseleave', function () {
//                     if (!$(this).is(':focus')) {
//                         $(this).prev('.edit-issue').css('display', 'inline-block');
//                     }
//                 });

//                 // Handle focus and blur events when input field is open
//                 $("a.project.root.leaf.public , a.project.root.parent.public").on("focus", "input.testInput", function () {
//                     hideEditIssueIcon($(this).closest("a.project.root.leaf.public, a.project.root.parent.public"));
//                 }).on("blur", "input.testInput", function () {
//                     hideEditIssueIcon($(this).closest("a.project.root.leaf.public , a.project.root.parent.public"));
//                 });

//                 // Show icon on hover for div.custom-details
//                 $("div.custom-details div:not(.project-members, .issues-info, .progress, .progress_result, .progress-bar)").hover(
//                     function () {
//                         if (!$(this).find(".testInput").is(":focus") && permissionstatus === 'true') {
//                             showEditIssueIcon($(this));
//                         }
//                     },
//                     function () {
//                         if (!$(this).find(".testInput").is(":focus")) {
//                             hideEditIssueIcon($(this));
//                         }
//                     }
//                 );

//                 // Handle focus and blur events when input field is open
//                 $("div.custom-details").on("focus", "input.testInput", function () {
//                     hideEditIssueIcon($(this).closest("div.custom-details"));
//                 }).on("blur", "input.testInput", function () {
//                     hideEditIssueIcon($(this).closest("div.custom-details"));
//                 });

//                 $(document).on("click", "#dynamic-edit-project-name", function (e) {
//                     e.preventDefault();
//                     e.stopPropagation();
//                 });

//                 // Enable editing UI, etc.
//                 $(document).on("click", ".edit-issue", function (e) {
//                     e.preventDefault();
//                     var parentDiv = $(this).closest(".project");
//                     var projectNameSpan = parentDiv.find(".div_text");
//                     var projectNameText = projectNameSpan.text();
//                     var parentLi = $(this).closest("li.root");
//                     var projectLink = parentLi.find("a.project").attr("href");
//                     var parts = projectLink.split('/');
//                     var projectDisplayId = parts[parts.length - 1];

//                     // Hide all other input fields
//                     $('.testInput').not(parentDiv.find('.testInput')).css('display', 'none').siblings('.div_text').show();
//                     $(".edit-issue").not($(this)).hide();


//                     // Hide edit icon and text span
//                     $(this).css('display', 'none');
//                     projectNameSpan.css('display', 'none');


//                     var inputField = parentDiv.find('.testInput');
//                     if (!inputField.length) {
//                         var inputField = $('<input>').attr({
//                             class: 'testInput',
//                             type: 'text',
//                             id: 'dynamic-edit-project-name',
//                             size: '47px',
//                             maxlength: '255',
//                             title: 'project name',
//                             placeholder: 'Enter name...'
//                         }).val(projectNameText);
//                         parentDiv.append(inputField);

//                         // Handle project name update
//                         inputField.on("keypress", function (e) {
//                             if (e.which == 13) {
//                                 $(this).blur();
//                                 e.preventDefault();
//                                 var updatedName = $(this).val();

//                                 $.ajax({
//                                     type: "PUT",
//                                     url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                     contentType: "application/json",
//                                     data: JSON.stringify({ project: { name: updatedName } }),
//                                     success: function (result, status, xhr) {
//                                         projectNameSpan.text(updatedName).show();
//                                         parentDiv.find("a.project").attr("href", `/projects/${updatedName}`);
//                                         // $(".edit-issue").show();
//                                         inputField.remove();
//                                     },
//                                     error: function (xhr, status, error) {
//                                         console.error("Error:", error);
//                                         console.log(xhr.responseText);
//                                     }
//                                 });
//                             }
//                         });
//                     } else {
//                         inputField.css('display', 'block');
//                     }


//                     var customFieldContainer = $(this).closest(".string, .date, .float, .bool, .int, .link, .list, .user, .version");
//                     $(document).on('mouseup', function (e) {
//                         var container = $('.testInput');
//                         if (!container.is(e.target) && container.has(e.target).length === 0) {
//                             $('.testInput').css('display', 'none');
//                             $('.div_text').css('display', 'inline-block');
//                             customFieldContainer.find('.div_text').css('display', 'inline-block');
//                         } else {
//                             var clickedInput = $(e.target).closest('.testInput');
//                             if (!clickedInput.length) {
//                                 $('.testInput').not(clickedInput).css('display', 'none');
//                                 $('.div_text').css('display', 'inline-block');
//                                 customFieldContainer.find('.div_text').css('display', 'inline-block');
//                             }
//                         }
//                     });

//                     $('.custom-details').on('mouseup', function (e) {
//                         e.stopPropagation();
//                     });

//                     if (customFieldContainer.length) {
//                         var fieldType = "";
//                         if (customFieldContainer.hasClass("string")) {
//                             fieldType = "text";
//                             var cdInput = 'dynamic-edit-field-' + fieldType + '-' + customFieldContainer.attr("class");
//                             var placeholderText = 'Enter custom field value...';
//                             var cdInput = $('<input>').attr({
//                                 class: 'testInput',
//                                 type: fieldType,
//                                 id: cdInput,
//                                 size: '17px',
//                                 maxlength: '255',
//                                 title: 'Custom Field',
//                                 placeholder: placeholderText
//                             }).val(customFieldContainer.find(".div_text").text().trim());

//                             customFieldContainer.find('.div_text').css('display', 'none');


//                             customFieldContainer.append(cdInput);

//                             cdInput.on("keypress", function (e) {
//                                 if (e.which == 13) {
//                                     var updatedValue = $(this).val();
//                                     var customFieldId = $(this).closest('.string').attr('id');

//                                     $(this).closest('.string').html(`<span class="div_text">${updatedValue}</span>`);
//                                     var requestData = {
//                                         project: {
//                                             custom_fields: [
//                                                 {
//                                                     id: customFieldId,
//                                                     value: updatedValue
//                                                 }
//                                             ]
//                                         }
//                                     };

//                                     $.ajax({
//                                         type: "PUT",
//                                         url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                         contentType: "application/json",
//                                         data: JSON.stringify(requestData),
//                                         success: function (result, status, xhr) {
//                                             cdInput.remove();
//                                         },
//                                         error: function (xhr, status, error) {
//                                             console.error("Error:", error);
//                                             console.log(xhr.responseText);
//                                         }
//                                     });
//                                 }
//                             });
//                         } else if (customFieldContainer.hasClass("date")) {
//                             fieldType = "date";
//                             var cdInput = 'dynamic-edit-field-' + fieldType + '-' + customFieldContainer.attr("class");

//                             // Append input field based on field type
//                             var placeholderText = 'Enter custom field value...';
//                             var inputField = $('<input>').attr({
//                                 class: 'testInput',
//                                 type: fieldType,
//                                 id: cdInput,
//                                 size: '17px',
//                                 maxlength: '30',
//                                 title: 'Custom Field',
//                                 placeholder: placeholderText
//                             }).val(customFieldContainer.find(".div_text").text().trim());

//                             customFieldContainer.find('.div_text').hide();
//                             customFieldContainer.append(inputField);

//                             // Handle custom field update
//                             inputField.on("change", function (e) {
//                                 var updatedValue = $(this).val();
//                                 var customFieldId = $(this).closest('.date').attr('id');

//                                 $(this).closest('.date').html(`<span class="div_text">${updatedValue}</span>`);

//                                 var requestData = {
//                                     project: {
//                                         custom_fields: [
//                                             {
//                                                 id: customFieldId,
//                                                 value: updatedValue
//                                             }
//                                         ]
//                                     }
//                                 };

//                                 $.ajax({
//                                     type: "PUT",
//                                     url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                     contentType: "application/json",
//                                     data: JSON.stringify(requestData),
//                                     success: function (result, status, xhr) {
//                                         inputField.remove();
//                                     },
//                                     error: function (xhr, status, error) {
//                                         console.error("Error:", error);
//                                         console.log(xhr.responseText);
//                                     }
//                                 });
//                             });
//                         } else if (customFieldContainer.hasClass("float")) {

//                             fieldType = "number";
//                             var cdInput = 'dynamic-edit-field-' + fieldType + '-' + customFieldContainer.attr("class");

//                             var placeholderText = 'Enter custom field value...';
//                             var inputField = $('<input>').attr({
//                                 class: 'testInput',
//                                 type: fieldType,
//                                 id: cdInput,
//                                 size: '10px',
//                                 maxlength: '100',
//                                 title: 'Custom Field',
//                                 placeholder: placeholderText
//                             }).val(customFieldContainer.text().trim());

//                             customFieldContainer.find('.div_text').hide();
//                             customFieldContainer.append(inputField);

//                             inputField.on("keypress", function (e) {
//                                 if (e.which == 13) {
//                                     e.preventDefault();
//                                     var updatedValue = $(this).val();
//                                     var customFieldId = $(this).closest('.float').attr('id');
//                                     var divTextElement = $(this).closest('.float').find('.div_text');

//                                     $(this).closest('.float').html(`<span class="div_text">${updatedValue}</span>`);
//                                     divTextElement.text(updatedValue);

//                                     var requestData = {
//                                         project: {
//                                             custom_fields: [
//                                                 {
//                                                     id: customFieldId,
//                                                     value: updatedValue
//                                                 }
//                                             ]
//                                         }
//                                     };

//                                     $.ajax({
//                                         type: "PUT",
//                                         url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                         contentType: "application/json",
//                                         data: JSON.stringify(requestData),
//                                         success: function (result, status, xhr) {
//                                             inputField.remove();
//                                         },
//                                         error: function (xhr, status, error) {
//                                             console.error("Error:", error);
//                                             console.log(xhr.responseText);
//                                         }
//                                     });
//                                 }
//                             });
//                         } else if (customFieldContainer.hasClass("int")) {
//                             fieldType = "number";
//                             var cdInput = 'dynamic-edit-field-' + fieldType + '-' + customFieldContainer.attr("class");

//                             var placeholderText = 'Enter custom field value...';
//                             var inputField = $('<input>').attr({
//                                 class: 'testInput',
//                                 type: fieldType,
//                                 id: cdInput,
//                                 size: '15px',
//                                 maxlength: '100',
//                                 title: 'Custom Field',
//                                 placeholder: placeholderText
//                             }).val(customFieldContainer.text().trim());

//                             customFieldContainer.find('.div_text').hide();
//                             customFieldContainer.append(inputField);

//                             inputField.on("keypress", function (e) {
//                                 if (e.which == 13) {
//                                     var updatedValue = $(this).val();
//                                     var customFieldId = $(this).closest('.int').attr('id');
//                                     $(this).closest('.int').html(`<span class="div_text">${updatedValue}</span>`);

//                                     var requestData = {
//                                         project: {
//                                             custom_fields: [
//                                                 {
//                                                     id: customFieldId,
//                                                     value: updatedValue
//                                                 }
//                                             ]
//                                         }
//                                     };

//                                     $.ajax({
//                                         type: "PUT",
//                                         url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                         contentType: "application/json",
//                                         data: JSON.stringify(requestData),
//                                         success: function (result, status, xhr) {
//                                             inputField.remove();
//                                         },
//                                         error: function (xhr, status, error) {
//                                             console.error("Error:", error);
//                                             console.log(xhr.responseText);
//                                         }
//                                     });
//                                 }
//                             });

//                         } else if (customFieldContainer.hasClass("link")) {
//                             fieldType = "text";
//                             var cdInput = 'dynamic-edit-field-' + fieldType + '-' + customFieldContainer.attr("class");

//                             var placeholderText = 'Enter http address...';
//                             var inputField = $('<input>').attr({
//                                 class: 'testInput',
//                                 type: fieldType,
//                                 id: cdInput,
//                                 size: '15px',
//                                 maxlength: '255',
//                                 title: 'Custom Field',
//                                 placeholder: placeholderText
//                             }).val(customFieldContainer.text().trim());

//                             customFieldContainer.find('.div_text').hide();
//                             customFieldContainer.append(inputField);

//                             inputField.on("keypress", function (e) {
//                                 if (e.which == 13) {
//                                     var updatedValue = $(this).val();
//                                     var customFieldId = $(this).closest('.link').attr('id');

//                                     var requestData = {
//                                         project: {
//                                             custom_fields: [
//                                                 {
//                                                     id: customFieldId,
//                                                     value: updatedValue
//                                                 }
//                                             ]
//                                         }
//                                     };

//                                     $.ajax({
//                                         type: "PUT",
//                                         url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                         contentType: "application/json",
//                                         data: JSON.stringify(requestData),
//                                         success: function (result, status, xhr) {
//                                             location.reload();

//                                         },
//                                         error: function (xhr, status, error) {
//                                             console.error("Error:", error);
//                                             console.log(xhr.responseText);
//                                         }
//                                     });
//                                 }
//                             });

//                         } else if (customFieldContainer.hasClass("bool")) {
//                             var boolDiv = $(this).closest('.bool');
//                             cf_getCustomData(projectDisplayId, boolDiv);
//                         }
//                         else if (customFieldContainer.hasClass("list")) {
//                             var listDiv = $(this).closest('.list');
//                             cf_listData(projectDisplayId, listDiv);
//                         }
//                         else if (customFieldContainer.hasClass("user")) {
//                             var userDiv = $(this).closest('.user');
//                             cf_appendAssigneeDropdown(projectDisplayId, userDiv);
//                         }
//                         else if (customFieldContainer.hasClass("version")) {
//                             var versionDiv = $(this).closest('.version');
//                             cf_versionDropdown(projectDisplayId, versionDiv);
//                         }
//                     }
//                 });


//             }
//         });

//         // custom list for block display
//         function cf_listData(projectDisplayId, listDiv) {
//             var cf_valid = false;
//             $.ajax({
//                 url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                 type: "GET",
//                 crossDomain: true,
//                 dataType: "json",
//                 data: { limit: 200 },
//                 success: function (data) {
//                     var project_data = data.project;
//                     var c_f_issue = project_data.custom_fields;
//                     $.ajax({
//                         url: `${url}/custom_fields.json?key=${project_api_key}`,
//                         type: "GET",
//                         crossDomain: true,
//                         dataType: "json",
//                         success: function (result, index, xhr) {
//                             var custom_cf_Dropdown_list;
//                             var listElement = listDiv;
//                             result.custom_fields.forEach((data, index) => {
//                                 if (data.customized_type === "project") {
//                                     if (data.field_format == "list") {
//                                         var cf_list = data.possible_values;
//                                         listElement.find('.div_text').css('display', 'none');
//                                         custom_cf_Dropdown_list = $("<select>").attr("id", "custom_cf_Dropdown_list").addClass("testInput");
//                                         custom_cf_Dropdown_list.append($("<option>").val("").text(""));

//                                         // Iterate over cf_list and create an option for each value
//                                         cf_list.forEach(function (item) {
//                                             custom_cf_Dropdown_list.append($("<option>").val(item.value).text(item.label));
//                                         });

//                                         listElement.append(custom_cf_Dropdown_list);

//                                         custom_cf_Dropdown_list.on("change", function () {
//                                             var updatedValue = $(this).val();
//                                             var selectedText = $(this).find('option:selected').text();
//                                             var customFieldId = $(this).closest('.list').attr('id');

//                                             $(this).closest('.list').html(`<span class="div_text">${selectedText}</span>`);

//                                             var requestData = {
//                                                 project: {
//                                                     custom_fields: [
//                                                         {
//                                                             id: customFieldId,
//                                                             value: updatedValue,
//                                                         }
//                                                     ]
//                                                 }
//                                             };

//                                             $.ajax({
//                                                 type: "PUT",
//                                                 url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                                 contentType: "application/json",
//                                                 data: JSON.stringify(requestData),
//                                                 success: function (result, status, xhr) {
//                                                     // location.reload();
//                                                     custom_cf_Dropdown_list.remove();
//                                                 },
//                                                 error: function (xhr, status, error) {
//                                                     console.error("Error:", error);
//                                                     console.log(xhr.responseText);
//                                                 }
//                                             });
//                                         });
//                                     }
//                                 }
//                             });
//                         },
//                         error: function () { },
//                     });
//                 },
//                 error: function () { },
//             });

//         }
//         // user dropdown for block display
//         function cf_appendAssigneeDropdown(projectDisplayId, userDiv) {
//             // Check if the cf_userDropdown element already exists
//             var existingDropdown = userDiv.find('#cf_userDropdown');
//             if (existingDropdown.length > 0) {
//                 // The dropdown already exists, so return
//                 return;
//             }

//             $.ajax({
//                 url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                 type: "GET",
//                 crossDomain: true,
//                 dataType: "json",
//                 data: { limit: 200 },
//                 success: function (data) {
//                     var project_data = data.project;
//                     projectDisplayId = project_data.id;

//                     $.ajax({
//                         url: `${url}/projects/${parseInt(projectDisplayId)}/active_memberss.json?key=${project_api_key}`,
//                         type: "GET",
//                         crossDomain: true,
//                         dataType: "json",
//                         success: function (data) {
//                             var members = data.active_members;
//                             var userElement = userDiv;
//                             userElement.find('.div_text').css('display', 'none');
//                             if (userDiv.find('#cf_userDropdown').length === 0) {
//                                 var cf_userDropdown = $("<select>").attr("id", "cf_userDropdown").addClass("testInput");
//                                 cf_userDropdown.append($("<option>").val("").text(""));
//                                 members.forEach(function (user) {
//                                     cf_userDropdown.append($("<option>").val(user.id).text(user.name));
//                                 });
//                                 userElement.append(cf_userDropdown);

//                                 // Listen to change event on the dropdown
//                                 cf_userDropdown.on("change", function () {
//                                     var updatedValue = $(this).val();
//                                     var selectedText = $(this).find('option:selected').text();
//                                     var customFieldId = $(this).closest('.user').attr('id');
//                                     $(this).closest('.user').html(`<span class="div_text">${selectedText}</span>`);

//                                     var requestData = {
//                                         project: {
//                                             custom_fields: [
//                                                 {
//                                                     id: customFieldId,
//                                                     value: updatedValue
//                                                 }
//                                             ]
//                                         }
//                                     };


//                                     $.ajax({
//                                         type: "PUT",
//                                         url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                         contentType: "application/json",
//                                         data: JSON.stringify(requestData),
//                                         success: function (result, status, xhr) {
//                                             // location.reload();
//                                             cf_userDropdown.remove();

//                                         },
//                                         error: function (xhr, status, error) {
//                                             console.error("Error:", error);
//                                             console.log(xhr.responseText);
//                                         }
//                                     });
//                                 });
//                             }
//                         },
//                         error: function () { },
//                     });
//                 },
//                 error: function () { },
//             });
//         }

//         // version dropdown for block display
//         function cf_versionDropdown(projectDisplayId, versionDiv) {
//             var cf_valid = false;
//             $.ajax({
//                 type: "GET",
//                 url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                 crossDomain: true,
//                 dataType: "json",
//                 success: function (data) {
//                     var project_data = data.project;
//                     var version_id = project_data.id;

//                     $.ajax({
//                         url: `${url}/projects/${version_id}/versions.json?key=${project_api_key}`,
//                         type: "GET",
//                         crossDomain: true,
//                         dataType: "json",
//                         success: function (data) {
//                             var versions = data.versions;
//                             var versionElement = versionDiv;
//                             versionElement.find('.div_text').css('display', 'none');
//                             var versionDropdown = $("<select>").attr("id", "versionDropdown").addClass("testInput");
//                             versionDropdown.append($("<option>").val("").text(""));
//                             versions.forEach(function (version) {
//                                 versionDropdown.append($("<option>").val(version.id).text(version.name));
//                             });
//                             versionElement.append(versionDropdown);

//                             versionDropdown.on("change", function () {
//                                 var updatedValue = $(this).val();
//                                 var selectedText = $(this).find('option:selected').text();
//                                 var customFieldId = $(this).closest('.version').attr('id');

//                                 $(this).closest('.version').html(`<span class="div_text">${selectedText}</span>`);

//                                 var requestData = {
//                                     project: {
//                                         custom_fields: [
//                                             {
//                                                 id: customFieldId,
//                                                 value: updatedValue,
//                                             }
//                                         ]
//                                     }
//                                 };

//                                 $.ajax({
//                                     type: "PUT",
//                                     url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                     contentType: "application/json",
//                                     data: JSON.stringify(requestData),
//                                     success: function (result, status, xhr) {
//                                         // location.reload();
//                                         versionDropdown.remove();

//                                     },
//                                     error: function (xhr, status, error) {
//                                         console.error("Error:", error);
//                                         console.log(xhr.responseText);
//                                     }
//                                 });
//                             });
//                         },
//                         error: function (error) {
//                             console.error("Error fetching custom fields:", error);
//                         }
//                     });
//                 },
//                 error: function (error) {
//                     console.error("Error fetching project data:", error);
//                 }
//             });
//         }

//         //custom data for block display
//         function cf_getCustomData(projectDisplayId, boolDiv) {
//             var cf_valid = false;
//             $.ajax({
//                 url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                 type: "GET",
//                 crossDomain: true,
//                 dataType: "json",
//                 data: { limit: 200 },
//                 success: function (data) {
//                     var project_data = data.project;
//                     var c_f_issue = project_data.custom_fields;
//                     $.ajax({
//                         url: `${url}/custom_fields.json?key=${project_api_key}`,
//                         type: "GET",
//                         crossDomain: true,
//                         dataType: "json",
//                         success: function (result, index, xhr) {
//                             var custom_cf_Dropdown_bool;
//                             var boolElement = boolDiv;
//                             result.custom_fields.forEach((data, index) => {
//                                 if (data.customized_type === "project") {
//                                     if (data.field_format == "bool") {
//                                         var cf_bool = data.possible_values
//                                         boolElement.find('.div_text').css('display', 'none');
//                                         custom_cf_Dropdown_bool = $("<select>").attr("id", "custom_cf_Dropdown_bool").addClass("testInput");
//                                         custom_cf_Dropdown_bool.append($("<option>").val("").text(""));

//                                         // Iterate over cf_bool and create an option for each value
//                                         cf_bool.forEach(function (item) {
//                                             custom_cf_Dropdown_bool.append($("<option>").val(item.value).text(item.label));
//                                         });

//                                         boolElement.append(custom_cf_Dropdown_bool);

//                                         custom_cf_Dropdown_bool.on("change", function () {
//                                             var updatedValue = $(this).val();
//                                             var selectedText = $(this).find('option:selected').text();
//                                             var customFieldId = $(this).closest('.bool').attr('id');
//                                             $(this).closest('.bool').html(`<span class="div_text">${selectedText}</span>`);

//                                             var requestData = {
//                                                 project: {
//                                                     custom_fields: [
//                                                         {
//                                                             id: customFieldId,
//                                                             value: updatedValue,
//                                                         }
//                                                     ]
//                                                 }
//                                             };

//                                             $.ajax({
//                                                 type: "PUT",
//                                                 url: `${url}/projects/${projectDisplayId}.json?key=${project_api_key}`,
//                                                 contentType: "application/json",
//                                                 data: JSON.stringify(requestData),
//                                                 success: function (result, status, xhr) {
//                                                     // location.reload();
//                                                     custom_cf_Dropdown_bool.remove();
//                                                 },
//                                                 error: function (xhr, status, error) {
//                                                     console.error("Error:", error);
//                                                     console.log(xhr.responseText);
//                                                 }
//                                             });
//                                         });
//                                     }
//                                 }
//                             });
//                         },
//                         error: function () { },
//                     });
//                 },
//                 error: function () { },
//             });

//         }

//         //version dropdown 
//         function versionDropdown(rowId, currentTdClass, projectId, project_id) {
//             var version_id;
//             $.ajax({
//                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                 type: "GET",
//                 crossDomain: true,
//                 dataType: "json",
//                 // data: { limit: 100 },
//                 success: function (data) {
//                     var project_data = data.project;
//                     version_id = project_data.id;

//                     $.ajax({
//                         url: `${url}/projects/${version_id}/versions.json?key=${project_api_key}`,
//                         type: "GET",
//                         crossDomain: true,
//                         dataType: "json",
//                         success: function (data) {
//                             var rowtext = $(`tr#${rowId}`).find("td.fixed_version a").text();
//                             var issue_version = rowtext.split("\n")[0];

//                             versions = data.versions;
//                             var versionDropdown = "<select id= version_" + rowId + ">";


//                             if (issue_version.trim() === "") {
//                                 versionDropdown += `<option value="" selected></option>`;
//                             } else {
//                                 versionDropdown += `<option value=""></option>`;
//                             }

//                             for (let i = 0; i < versions.length; i++) {
//                                 versionDropdown +=
//                                     `<option ${issue_version == versions[i].name ? "selected" : ""
//                                     } value = ${versions[i].id}>` +
//                                     versions[i].name +
//                                     "</option>";
//                             }
//                             $(`tr#${rowId} td#${tdId}`).append(versionDropdown);
//                             if ($(`select#version_${rowId} option`).length == 1) {
//                                 toastr["error"]("This project does not have a fixed version.");
//                                 $(`#version_${rowId}`).css("display", "none");
//                             }
//                         },
//                         error: function () { },
//                     });
//                 },
//                 error: function () { },
//             });
//         }

//         // ----------------- custom data --------------
//         function getCustomData(rowId, currentTdClass, projectId, project_id) {
//             var cf_valid = false;
//             $.ajax({
//                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                 type: "GET",
//                 crossDomain: true,
//                 dataType: "json",
//                 success: function (data) {
//                     var project_data = data.project;
//                     var c_f_issue = project_data.custom_fields;
//                     var project_idds = project_data.id;
//                     $.ajax({
//                         type: "GET",
//                         url: `${url}/custom_fields.json?key=${project_api_key}`,
//                         dataType: "json",
//                         async: false,
//                         success: function (result, index, xhr) {
//                             var rowtext = $(`tr#${rowId}`).find(`td.cf_${custom_id}`).text();
//                             var issue_cf = rowtext.split("\n")[0];
//                             var custom_cf_Dropdown;
//                             var custom_cf_Dropdown_bool;
//                             result.custom_fields.forEach((data, index) => {
//                                 if (data.customized_type === "project") {
//                                     if (data.id == custom_id) {
//                                         if (data.field_format == "list") {
//                                             var cf_list = data.possible_values;
//                                             for (let i = 0; i < c_f_issue.length; i++) {
//                                                 var cf_issue_ids = c_f_issue[i].id;
//                                                 if (cf_issue_ids == custom_id) {
//                                                     cf_valid = false;
//                                                     custom_cf_Dropdown = "<select id= cf_list_" + rowId + ">";
//                                                     for (let i = 0; i < cf_list.length; i++) {
//                                                         custom_cf_Dropdown +=
//                                                             `<option ${issue_cf == cf_list[i].label ? "selected" : ""
//                                                             } value = ${cf_list[i].value}>` +
//                                                             cf_list[i].label +
//                                                             "</option>";
//                                                     }
//                                                     break;
//                                                 } else {
//                                                     cf_valid = true;
//                                                 }
//                                             }
//                                             if (cf_valid == true) {
//                                                 toastr["error"](
//                                                     "This custom field is not belong to this project"
//                                                 );
//                                             }
//                                         } else if (data.field_format == "bool") {
//                                             var cf_bool = data.possible_values;
//                                             for (let i = 0; i < c_f_issue.length; i++) {
//                                                 var cf_issue_bool_ids = c_f_issue[i].id;

//                                                 if (cf_issue_bool_ids == custom_id) {
//                                                     cf_valid = false;
//                                                     custom_cf_Dropdown = "<select id= cf_bool_" + rowId + ">";
//                                                     for (let i = 0; i < cf_bool.length; i++) {
//                                                         custom_cf_Dropdown +=
//                                                             `<option ${issue_cf == cf_bool[i].label ? "selected" : ""
//                                                             } value = ${cf_bool[i].value}>` +
//                                                             cf_bool[i].label +
//                                                             "</option>";
//                                                     }
//                                                     break;
//                                                 } else {
//                                                     cf_valid = true;
//                                                 }
//                                             }
//                                             if (cf_valid == true) {
//                                                 toastr["error"](
//                                                     "This custom field is not belong to this project"
//                                                 );
//                                             }
//                                         }
//                                     }
//                                 }
//                             });
//                             $(`tr#${rowId} td#${tdId}`).append(custom_cf_Dropdown);
//                         },
//                     });
//                 },
//                 error: function () { },
//             });
//         }

//         function appendAssigneeProjectList(rowId, currentTdClass, issueId, project_id) {
//             // var project_id;
//             var projectId;
//             $.ajax({
//                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                 type: "GET",
//                 crossDomain: true,
//                 dataType: "json",
//                 data: { limit: 200 },
//                 success: function (data) {
//                     var project_data = data.project;
//                     project_id = project_data.id;

//                     $.ajax({
//                         url: `${url}/projects/${parseInt(project_id)}/active_memberss.json?key=${project_api_key}`,
//                         type: "GET",
//                         crossDomain: true,
//                         dataType: "json",
//                         success: function (data) {
//                             var rowtext = $(`tr#${rowId}`).find("td.assigned_to a").text();
//                             var issue_assignee = rowtext.split("\n")[0];
//                             var members = data.active_members;

//                             var memberDropdown = "<select id= assignee_to_" + rowId + ">";
//                             if (issue_assignee.trim() === "") {
//                                 memberDropdown += `<option value="" selected></option>`;
//                             } else {
//                                 memberDropdown += `<option value=""></option>`;
//                             }

//                             for (var i = 0; i < members.length; i++) {
//                                 var member_id = members[i].id;
//                                 var member_name = members[i].name;

//                                 memberDropdown +=
//                                     `<option ${issue_assignee == member_name ? "selected" : ""
//                                     } value = ${member_id}>` +
//                                     member_name +
//                                     "</option>";
//                             }

//                             $(`tr#${rowId} td#${tdId}`).append(memberDropdown);
//                             if ($(`select#assignee_to_${rowId} option`).length == 1) {
//                                 toastr["error"]("This project does not have a assignee");
//                                 $(`#assignee_to_${rowId}`).css("display", "none");
//                             }
//                         },
//                         error: function () { },
//                     });
//                 },
//                 error: function () { },
//             });
//         }

//         // dropdown values
//         function appendnameDropdown(rowId, currentTdClass, selectedProject, project_id) {
//             var trId = $(this).closest("tr").attr('id');
//             var trId = rowId;
//             var regex = /-(\d+)/;
//             var match = trId.match(regex);
//             var project_id = match ? match[1] : null;

//             $.ajax({
//                 url: `${url}/projects/${parseInt(project_id)}.json?key=${project_api_key}`,
//                 type: "GET",
//                 crossDomain: true,
//                 dataType: "json",
//                 data: { limit: 100 },
//                 success: function (data) {
//                     var rowtext = $(`tr#${rowId}`).find("td.parent_id a").text();
//                     var issue_project = rowtext.split("\n")[0];
//                     parentProjects = data.project.parent || [];

//                     if (!parentProjects.name) {
//                         projectDropdown = "<select id='project_" + rowId + "'>";
//                         projectDropdown += "<option disabled>No Subproject found</option>";
//                         projectDropdown += "</select>";
//                         $(`tr#${rowId} td#${tdId}`).append(projectDropdown);
//                         return;
//                     }

//                     var projectDropdown = "<select id='project_" + rowId + "'>";
//                     projectDropdown = "<select id='project_" + rowId + "'>";
//                     projectDropdown += `<option ${issue_project == parentProjects.name ? "selected" : ""} value="${parentProjects.id}">
//                    ${parentProjects.name}
//                  </option>`;
//                     projectDropdown += "</select>";
//                     $(`tr#${rowId} td#${tdId}`).append(projectDropdown);
//                 },

//                 error: function () { },
//             });
//         }


//         const customDetailsDivs = document.querySelectorAll('.custom-details');

//         for (let i = 0; i < customDetailsDivs.length; i++) {
//             const customDetailsDiv = customDetailsDivs[i];
//             const childDivs = customDetailsDiv.querySelectorAll('div');

//             for (let j = 0; j < childDivs.length; j++) {
//                 const div = childDivs[j];
//                 const classes = div.className.split(' ');
//                 const className = classes[classes.length - 1];
//                 const valueName = classes[0];
//                 const tooltip = getTooltipText(className, valueName);
//                 div.setAttribute('data-tooltip', tooltip);
//             }
//         }

//         function getTooltipText(className, valueName) {
//             switch (className) {
//                 case 'string':
//                     return valueName;
//                 case 'int':
//                     return valueName;
//                 case 'link':
//                     return valueName;
//                 case 'list':
//                     return valueName;
//                 case 'user':
//                     return valueName;
//                 case 'version':
//                     return valueName;
//                 case 'date':
//                     return valueName;
//                 case 'float':
//                     return valueName;
//                 case 'bool':
//                     return valueName;
//                 case 'file':
//                     return valueName;
//                 case 'key':
//                     return valueName;
//                 case 'text':
//                     return valueName;
//                 case 'attachment':
//                     return valueName;
//                 case 'enumeration':
//                     return valueName;
//                 default:
//                     return '';
//             }
//         }


//     }
// })