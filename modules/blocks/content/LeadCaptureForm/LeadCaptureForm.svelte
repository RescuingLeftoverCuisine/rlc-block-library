<script>
  export let data
</script>

<div class='rlc__block rlc__block__lead-capture-form rlc-p-4 tablet:rlc-max-w-[450px] tablet:rlc-mx-auto'>
  <div class='rlc-flex rlc-flex-col rlc-gap-2'>
    <div class='rlc-flex rlc-flex-col rlc-gap-2'>
      { #if data.heading }
        <h2 class='rlc__text__heading__three'>{ data.heading }</h2>
      { /if }

      { #if data.subtext }
        <p class='rlc__text__base'>{ data.subtext }</p>
      { /if }
    </div>

    <form class='rlc-flex rlc-flex-col rlc-gap-1' action='https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DO1000000BnAH' method='POST'>
      <input type='hidden' name='oid' value='00DO1000000BnAH'>
      <input type='hidden' name='recordType' id='recordType' value='012O1000002CZIbIAO'>
      <input type='hidden' name='retURL' value='https://rlc-staging-master.herokuapp.com/form-thank-you'>
      <input type='hidden' name='Landing_Page_URL__c' id='Landing_Page_URL__c' value='{ window.location.href }'>

      <fieldset class='tablet:rlc-grid tablet:rlc-grid-cols-[1fr,1fr] tablet:rlc-gap-2'>
        <div>
          <label class='rlc__text__base rlc-block rlc-w-full' for='first_name'>First Name</label>
          <input class='rlc__form__text rlc-block rlc-w-full' id='first_name' maxlength='40' name='first_name' type='text' required />
        </div>

        <div>
          <label class='rlc__text__base rlc-block rlc-w-full' for='last_name'>Last Name</label>
          <input class='rlc__form__text rlc-block rlc-w-full' id='last_name' maxlength='80' name='last_name' type='text' required />
        </div>
      </fieldset>

      <label class='rlc__text__base rlc-block rlc-w-full' for='email'>Email</label>
      <input class='rlc__form__text rlc-block rlc-w-full' id='email' maxlength='80' name='email' type='email' required />

      { #if data.showCompanyField }
        <label class='rlc__text__base rlc-block rlc-w-full' for='company'>Company</label>
        <input class='rlc__form__text rlc-block rlc-w-full' id='company' maxlength='80' name='company' type='text' />
      { /if }

      <input class='rlc__button rlc__button--theme-blue rlc-mt-2' type='submit' name='submit' value='{ data.buttonText }' />
    </form>
  </div>
</div>
