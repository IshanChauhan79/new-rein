import React from "react";
import "./Form.css";

// import classNamees from  "./Form.module.css";

function Form() {
  function privacyAlert269669000000200313() {
    var privacyTool = document.getElementById("privacyTool269669000000200313");
    var privacyErr = document.getElementById("privacyErr269669000000200313");
    if (privacyTool !== undefined && !privacyTool.checked) {
      privacyErr.style.visibility = "visible";
      privacyTool.focus();
      return false;
    }
    return true;
  }
  function disableErr269669000000200313() {
    var privacyTool = document.getElementById("privacyTool269669000000200313");
    var privacyErr = document.getElementById("privacyErr269669000000200313");
    if (
      privacyTool !== undefined &&
      privacyTool.checked &&
      privacyErr !== undefined
    ) {
      privacyErr.style.visibility = "hidden";
    } else {
      privacyErr.style.visibility = "visible";
    }
  }

  const checkMandatory269669000000200313 = (e) => {
    //    e.preventDefault();
    var mndFileds = new Array("Last Name");
    var fldLangVal = new Array("Phone\x20Number");
    // console.log("hello");
    for (let i = 0; i < mndFileds.length; i++) {
      var fieldObj =
        document.forms["WebToLeads269669000000200313"][mndFileds[i]];
      if (fieldObj) {
        if (fieldObj.value.replace(/^\s+|\s+$/g, "").length === 0) {
          if (fieldObj.type === "file") {
            alert("Please select a file to upload.");
            fieldObj.focus();
            return false;
          }
          alert(fldLangVal[i] + " cannot be empty.");
          fieldObj.focus();
          return false;
        } else if (fieldObj.nodeName === "SELECT") {
          if (fieldObj.options[fieldObj.selectedIndex].value === "-None-") {
            alert(fldLangVal[i] + " cannot be none.");
            fieldObj.focus();
            return false;
          }
        } else if (fieldObj.type === "checkbox") {
          if (fieldObj.checked === false) {
            alert("Please accept  " + fldLangVal[i]);
            fieldObj.focus();
            return false;
          }
        }
        try {
          if (fieldObj.name === "Last Name") {
            var name = fieldObj.value;
          }
        } catch (e) {}
      }
    }
    if (!privacyAlert269669000000200313()) {
      return false;
    }
    document
      .querySelector(".crmWebToEntityForm .formsubmit")
      .setAttribute("disabled", true);
    //   e.target.submit()S
    // return true;
  };

  function tooltipShow269669000000200313(el) {
    var tooltip = el.nextElementSibling;
    var tooltipDisplay = tooltip.style.display;
    if (tooltipDisplay === "none") {
      var allTooltip = document.getElementsByclass("zcwf_tooltip_over");
      for (let i = 0; i < allTooltip.length; i++) {
        allTooltip[i].style.display = "none";
      }
      tooltip.style.display = "block";
    } else {
      tooltip.style.display = "none";
    }
  }
  return (
    <div
      id="crmWebToEntityForm"
      className="zcwf_lblLeft crmWebToEntityForm"
      //   style="background-color: white;color: black;max-width: 600px;"
    >
      <form
        action="https://crm.zoho.in/crm/WebToLeadForm"
        name="WebToLeads269669000000200313"
        method="post"
        onSubmit={checkMandatory269669000000200313}
      >
        <input
          type="text"
          style={{ display: "none" }}
          name="xnQsjsdp"
          value="3fef1381d1076883454f9b8f5f77f108d5a9846996c56b4fd74cbbda706fe9da"
        ></input>
        <input type="hidden" name="zc_gad" id="zc_gad" value=""></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="xmIwtLD"
          value="21fd2e6c25ed00ca0a8daf5b7695fc72cfa286560352d3f6a7eab0ad9bb81a89"
          readOnly
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="actionType"
          value="TGVhZHM="
          readOnly
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="returnURL"
          value="https&#x3a;&#x2f;&#x2f;reinpurifiers.co.in&#x2f;&#x23;&#x2f;"
          readOnly
        ></input>

        <div
          className="zcwf_title"
          // style="max-width: 600px;color: black;"
        >
          undersink Google Ads
        </div>
        <div className="zcwf_row">
          <div
            className="zcwf_col_lab"
            //   style="font-size:12px; font-family: Arial;"
          >
            <label htmlFor="Last_Name">
              Phone Number
              <span
              //   style="color:red;"
              >
                *
              </span>
            </label>
          </div>
          <div className="zcwf_col_fld">
            <input
              type="text"
              id="Last_Name"
              name="Last Name"
              maxLength="80"
            ></input>
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row wfrm_fld_dpNn">
          <div
            className="zcwf_col_lab"
            //   style="font-size:12px; font-family: Arial;"
          >
            <label htmlFor="Designation">Title</label>
          </div>
          <div className="zcwf_col_fld">
            <input
              type="text"
              id="Designation"
              name="Designation"
              maxLength="100"
              value="Undersink&#x20;Water&#x20;Purifier"
              readOnly
            ></input>
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row wfrm_fld_dpNn">
          <div
            className="zcwf_col_lab"
            //   style="font-size:12px; font-family: Arial;"
          >
            <label htmlFor="Lead_Source">Lead Source</label>
          </div>
          <div className="zcwf_col_fld">
            <select
              className="zcwf_col_fld_slt"
              id="Lead_Source"
              name="Lead Source"
              defaultValue="Advertisement"
            >
              <option value="-None-">-None-</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Cold&#x20;Call">Cold Call</option>
              <option value="Employee&#x20;Referral">Employee Referral</option>
              <option value="External&#x20;Referral">External Referral</option>
              <option value="Online&#x20;Store">Online Store</option>
              <option value="Partner">Partner</option>
              <option value="Public&#x20;Relations">Public Relations</option>
              <option value="Sales&#x20;Email&#x20;Alias">
                Sales Email Alias
              </option>
              <option value="Seminar&#x20;Partner">Seminar Partner</option>
              <option value="Internal&#x20;Seminar">Internal Seminar</option>
              <option value="Trade&#x20;Show">Trade Show</option>
              <option value="Web&#x20;Download">Web Download</option>
              <option value="Web&#x20;Research">Web Research</option>
              <option value="Chat">Chat</option>
              <option value="Twitter">Twitter</option>
              <option value="Facebook">Facebook</option>
              <option value="Google&#x2b;">Google&#x2b;</option>
            </select>
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row">
          <div className="zcwf_privacy">
            <div className="dIB vat" align="left">
              <div className="displayPurpose  f13">
                <label className="newCustomchkbox-md dIB w100per">
                  <input
                    id="privacyTool269669000000200313"
                    type="checkbox"
                    name="privacyTool"
                    onClick={disableErr269669000000200313}
                  />
                </label>
              </div>
            </div>
            <div
              className="dIB zcwf_privacy_txt"
              //   style="font-size: 12px;font-family:Arial;color: black;"
            >
              I agree to the Privacy Policy and Terms of Service.
            </div>
            <div
              id="privacyErr269669000000200313"
              style={{
                fontSize: "12px",
                color: "red",
                paddingLeft: "5px",
                visibility: "hidden",
              }}
            >
              Please accept this
            </div>
          </div>
        </div>
        <div className="zcwf_row">
          <div className="zcwf_col_lab"></div>
          <div className="zcwf_col_fld">
            <input
              type="submit"
              id="formsubmit"
              className="formsubmit zcwf_button"
              value="Submit"
              title="Submit"
            />
            <input
              type="reset"
              className="zcwf_button"
              name="reset"
              value="Reset"
              title="Reset"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
