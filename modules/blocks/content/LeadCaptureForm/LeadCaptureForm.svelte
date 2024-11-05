<script>
  export let data
</script>

<div class='rlc__block rlc__block__lead-capture-form rlc-p-4'>
  <form class='rlc-flex rlc-flex-col rlc-gap-1 tablet:rlc-max-w-[450px] tablet:rlc-mx-auto' action='https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DO1000000BnAH' method='POST'>
    <input type='hidden' name='oid' value='00DO1000000BnAH'>
    <input type='hidden' name='recordType' id='recordType' value='012O1000002CZIbIAO'>
    <input type='hidden' name='retURL' value='https://www.rescuingleftovercuisine.org/form-thank-you'>

    <fieldset class='tablet:rlc-grid tablet:rlc-grid-cols-[1fr,1fr] tablet:rlc-gap-2'>
      <div>
        <label class='rlc__text__base rlc-block rlc-w-full' for='first_name'>First Name</label>
        <input class='rlc__form__text rlc-block rlc-w-full' id='first_name' maxlength='40' name='first_name' size='20' type='text' required />
      </div>

      <div>
        <label class='rlc__text__base rlc-block rlc-w-full' for='last_name'>Last Name</label>
        <input class='rlc__form__text rlc-block rlc-w-full' id='last_name' maxlength='80' name='last_name' size='20' type='text' required />
      </div>
    </fieldset>

    <label class='rlc__text__base rlc-block rlc-w-full' for='email'>Email</label>
    <input class='rlc__form__text rlc-block rlc-w-full' id='email' maxlength='80' name='email' size='20' type='email' required />

    <input class='rlc__button rlc__button--theme-blue rlc-mt-2' type='submit' name='submit' value='Sign Up' />
  </form>
</div>
