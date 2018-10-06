import React, { Component } from 'react';
import InputField from './InputField.jsx';
import InputFieldGroup from './InputFieldGroup.jsx';
import InputSection from './InputSection.jsx';
import Dropdown from './Dropdown.jsx';
import InputDropdownGroup from './InputDropdownGroup';
import Footer from './Footer.jsx';
import styles from './SerApplication.module.css';
import firebase from './fire.js';

class SerApplication extends Component {
  constructor() {
    super();
    this.state = {
      isSubmitted: false,
      first_name: '',
      middle_name: '',
      last_name: '',
      hear_ser_jobs_from: '',
      street_addr: '',
      city: '',
      state: '',
      postal_code: '',
      county: '',
      other_county: '',
      social_security: '',
      birthday: '',
      email: '',
      work_phone: '',
      mobile_phone: '',
      home_phone: '',
      preferred_phone: '',
      fb_page: '',
      twitter_handle: '',
      insta_user: '',
      linkedin_prof: '',
      gender: '',
      is_hisp_latino: '',
      race: '',
      languages: '',
      special_accomodations: '',
      citizenship: '',
      valid_id: '',
      form_id: '',
      license_type: '',
      transportation: '',
      housing_status: '',
      risk_homeless: '',
      over_24: '',
      foster_care: '',
      parents_incarcerated: '',
      juvie: '',
      reside_single_parent: '',
      free_reduced_lunch: '',
      drop_high_school: '',
      parenting: '',
      expected_due_date: '',
      lack_work_history: '',
      marital_status: '',
      annual_income: '',
      children_under_17: '',
      adult_18_24: '',
      adult_over_25: '',
      have_checking: '',
      have_savings_account: '',
      have_payday_loan: '',
      have_car_loan: '',
      public_assistance: '',
      selective_service: '',
      emergency_contact_name: '',
      emergency_contact_relationship: '',
      emergency_contact_mobile_phone: '',
      emergency_contact_alternate_phone: '',
      emergency_contact_address: '',
      veteran: '',
      military_status: '',
      date_discharge: '',
      branch_served: '',
      rate_below: '',
      high_priority: '',
      medium_priority: '',
      low_priority: '',
      availability: '',
      time_invest: '',
      block_get_job: '',
      prevent_maintain_job: '',
      expected_wage: '',
      drug_screening: '',
      share_SER: '',
      other: ''    
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
		e.preventDefault();
  	const itemsRef = firebase.database().ref('users');
  	const item = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      hear_ser_jobs_from: this.state.hear_ser_jobs,
      street_addr: this.state.street_addr,
      city: this.state.city,
      state: this.state.state,
      postal_code: this.state.postal_code,
      county: this.state.county,
      other_county: this.state.other_county,
      social_security: this.state.social_security,
      birthday: this.state.birthday,
      email: this.state.email,
      work_phone: this.state.work_phone,
      mobile_phone: this.state.mobile_phone,
      home_phone: this.state.home_phone,
      preferred_phone: this.state.preferred_phone,
      fb_page: this.state.fb_page,
      twitter_handle: this.state.twitter_handle,
      insta_user: this.state.insta_user,
      linkedin_prof: this.state.linkedin_prof,
      gender: this.state.gender,
      is_hisp_latino: this.state.is_hisp_latino,
      race: this.state.race,
      languages: this.state.languages,
      special_accomodations: this.state.special_accomodations,
      citizenship: this.state.citizenship,
      valid_id: this.state.valid_id,
      form_id: this.state.form_id,
      license_type: this.state.license_type,
      transportation: this.state.transportation,
      housing_status: this.state.housing_status,
      risk_homeless: this.state.ris_homeless,
      over_24: this.state.over_24,
      foster_care: this.state.foster_care,
      parents_incarcerated: this.state.parents_incarcerated,
      juvie: this.state.juvie,
      reside_single_parent: this.state.reside_single_parent,
      free_reduced_lunch: this.state.free_reduced_lunch,
      drop_high_school: this.state.drop_high_school,
      parenting: this.state.parenting,
      expected_due_date: this.state.expected_due_date,
      lack_work_history: this.state.lack_work_history,
      marital_status: this.state.marital_status,
      annual_income: this.state.annual_income,
      children_under_17: this.state.children_under_17,
      adult_18_24: this.state.adult_18_24,
      adult_over_25: this.state.adult_over_25,
      have_checking: this.state.have_checking,
      have_savings_account: this.state.have_savings_account,
      have_payday_loan: this.state.have_payday_loan,
      have_car_loan: this.state.have_car_loan,
      public_assistance: this.state.public_assistance,
      selective_service: this.state.selective_service,
      emergency_contact_name: this.state.emergency_contact_name,
      emergency_contact_relationship: this.state.emergency_contact_relationship,
      emergency_contact_mobile_phone: this.state.emergency_contact_mobile_phone,
      emergency_contact_alternate_phone: this.state.emergency_contact_alternate_phone,
      emergency_contact_address: this.state.emergency_contact_address,
      veteran: this.state.veteran,
      military_status: this.state.military_status,
      date_discharge: this.state.date_discharge,
      branch_served: this.state.branch_server,
      rate_below: this.state.rate_below,
      high_priority: this.state.high_priority,
      medium_priority: this.state.medium_priority,
      low_priority: this.state.low_priority,
      availability: this.state.availability,
      time_invest: this.state.time_invest,
      block_get_job: this.state.block_get_job,
      prevent_maintain_job: this.state.prevent_maintain_job,
      expected_wage: this.state.expected_wage,
      drug_screening: this.state.drug_screening,
      share_SER: this.state.share_SER,
      other: this.state.other,
  	}
  	itemsRef.push(item);
    this.setState({
      isSubmitted: true
    });
  }


  render() {
    const isSubmitted = this.state.isSubmitted;
    const hear_ser_jobs_from_arr = ["Please select...", "Church Flyer", "Church Presentation", "Community Agency Flyer", "Community Agency Staff", "Guidance Counselor", "HCC", "Information Session", "Internet/ Social Media", "Job Fair/ Hiring Event", "SER Client/Alumni", "SER Staff", "United Way Helpline", "Workforce Solutions", "Other"];
    const state_arr = ["Please select...", "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Puerto Rico", "Virgin Island", "Northern Mariana Islands", "Guam", "American Samoa", "Palau"];
    const county_arr = ["Please select...", "Brazoria", "Chambers", "Fort Bend", "Galveston", "Harris", "Liberty", "Montgomery", "Waller", "Other"];
    const preferred_phone_arr = ["Please select...", "Home", "Work", "Mobile"];
    const gender_arr = ["Please select...", "Female", "Male", "Transgender"];
    const is_hisp_latino_arr = ["Please select...", "Yes", "No"];
    const race_arr = ["Please select...", "Black or African American", "American Indian or Alaskan Native", "Asian (not Pacific Islander)", "Hawaiian Native or Pacific Islander", "White or Caucasian", "Two or More", "Other"];
    const languages_arr = ["African Languages", "Arabic", "Chinese", "French", "German", "Italian", "Japanese", "Korean", "Persian", "Portuguese", "Russian", "Spanish or Spanish Creole", "Vietnamese", "Other", "Not Applicable"];
    const special_accomodations_arr = ["Visual", "Hearing", "Speech", "Limited Mobility", "Not Applicable", "Are you authorized to work in the United States?", "Please select...", "Yes", "No"];
    const citizenship_arr = ["Please select...", "Citizen of the United States", "Non-citizen National of the United States", "Lawful Permanent Resident"];
    const valid_id_arr = ["Please select...", "Yes", "No"];
    const form_id_arr = ["Please select...", "Texas Issued Driver's License", "Other State Issued Driver's License", "Texas Issued Identification Card", "Other State Issued Identification Card", "Passport"];
    const license_type_arr = ["Please select...", "Class A", "Class B", "Class C", "Class M"];
    const transportation_arr = ["Please select...", "Own/lease vehicle", "Can borrow vehicle", "Public transit", "Own/lease vehicle but it's inoperable/not reliable"];
    const housing_status_arr = ["Please select...", "Homeowner", "Renter-Unsubsidized (not receiving public assistance)", "Renter-Subsidized (receiving public assistance to cover your rent)", "Living with a friend/ family", "Staying in a shelter", "Homeless"];
    const risk_homeless_arr = ["Please select...", "Yes", "No"];
    const over_24_arr = ["Please select...", "Yes", "No"];
    const foster_care_arr = ["Please select...", "Yes", "No", "Not Applicable"];
    const parents_incarcerated_arr = ["Please select...", "Yes", "No", "Not Sure"];
    const juvie_arr = ["Please select...", "Yes", "No"];;
    const reside_single_parent_arr = ["Please select...", "Yes", "No"];
    const free_reduced_lunch_arr = ["Please select...", "Yes", "No", "Not Applicable"];
    const drop_high_school_arr = ["Please select...", "Yes", "No"];
    const parenting_arr = ["Please select...", "Yes", "No", "Expecting"];
    const lack_work_history_arr = ["Please select...", "Yes", "No"];
    const marital_status_arr = ["Please select...", "Single", "Married", "Divorced", "Separated", "Widow/Widower"];
    const annual_income_arr = ["Please select...", "<$5,000", "$5,000-10,000", "$10,001-15,000", "$15,001-20,000", "$20,001-25,000", "$25,001-30,000", "$30,001-35,000", "$35,001-40,000", "$40,001-50,000", "$50,001-60,000", "$60,001-70,000", "$70,001-80,000", "$80,001-90,000", "$90,001-100,000", "$100,001-120,000", "$120,001+"];
    const have_checking_arr = ["Please select...", "Yes", "No"];
    const have_savings_account_arr = ["Please select...", "Yes", "No"];
    const have_payday_loan_arr = ["Please select...", "Yes", "No"];
    const have_car_loan_arr = ["Please select...", "Yes", "No"];
    const public_assistance_arr = ["Breakfast & Lunch Program", "CHIP (Children's Medicaid)", "CEAP (Comprehensive Energy Asst Program)", "Headstart", "Medicaid", "SFSP (Summer Food Service Program)", "SMP (Special Milk Program)", "SNAP (Supplemental Nutrition Asst Program)", "TANF (Texas Temp. Asst for Needy Families)", "WAP (Weatherization Asst Program)", "WIC (Women, Infants, and Children)"];
    const selective_service_arr = ["Please select...", "Yes", "No", "Not Sure", "Not Applicable"];
    const veteran_arr = ["Please select...", "Yes", "No"];
    const military_status_arr = ["Please select...", "Reserve", "Honorable Discharge", "Dishonorable Discharge", "General Discharge"];
    const branch_served_arr = ["Please select...", "Army", "Army National Guard", "Marine Corps", "Navy", "Air Force", "Air Force National Guard", "Coast Guard"];
    const high_priority_arr = ["Please select...", "Job Placement", "Career Development", "Training", "Education", "Income Support", "Financial Education"];
    const medium_priority_arr = ["Please select...", "Job Placement", "Career Development", "Training", "Education", "Income Support", "Financial Education"];
    const low_priority_arr = ["Please select...", "Job Placement", "Career Development", "Training", "Education", "Income Support", "Financial Education"];
    const availability_arr = ["Full time (30+ hours per week)", "Part time (20 hours or less per week)", "Days (8am to 5pm)", "Evenings (6pm to 10pm)", "Weekdays (Monday-Friday)", "Weekends (Saturday & Sunday)"];
    const time_invest_arr = ["Please select...", "2 weeks", "6-10 weeks", "Up to one year"];
    const block_get_job_arr = ["Background", "Homelessness", "Lack of support", "Learning disability", "Physical disability", "Substance abuse", "Need of training", "Means of transportation", "Need of child care", "Other"];
    const prevent_maintain_job_arr = ["Absenteeism", "Lack of support", "Learning disability", "Maintaining relationship", "Physical disability", "Substance abuse", "Tardiness", "Transportation", "Child care", "Other"];
    const drug_screening_arr = ["Please select...", "Yes", "No", "Unsure"];
    const share_SER_arr = ["Please select...", "Yes", "No", "Not Sure"];
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
            <InputSection name="Contact Information">
              <div className={styles.nameBlock}>
                <InputFieldGroup type="text" name="first_name" onChange={this.handleChange} value={this.state.first_name}>First Name*</InputFieldGroup>
                <InputFieldGroup type="text" name="middle_name" onChange={this.handleChange} value={this.state.middle_name}>Middle Name</InputFieldGroup>
                <InputFieldGroup type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name}>Last Name*</InputFieldGroup>
              </div>
              <InputDropdownGroup options={hear_ser_jobs_from_arr}>How did you hear about SER Jobs for Progress?</InputDropdownGroup>
              <Dropdown options={hear_ser_jobs_from_arr}/>
              <InputFieldGroup type="text" name="street_addr" onChange={this.handleChange} value={this.state.street_addr}>Street Address</InputFieldGroup>
              <InputFieldGroup type="text" name="city" onChange={this.handleChange} value={this.state.city}>City</InputFieldGroup>
              <InputDropdownGroup options={state_arr}>State</InputDropdownGroup>
              <Dropdown options={state_arr}/>
              <InputFieldGroup type="text" name="postal_code" onChange={this.handleChange} value={this.state.postal_code}>Postal Code</InputFieldGroup>
              <InputDropdownGroup options={county_arr}>County</InputDropdownGroup>
              <Dropdown options={county_arr}/>
              <InputFieldGroup type="text" name="other_county" onChange={this.handleChange} value={this.state.other_county}>Other County</InputFieldGroup>
              <InputFieldGroup type="text" name="social_security" onChange={this.handleChange} value={this.state.social_security}>Social Security #</InputFieldGroup>
              <InputFieldGroup type="text" name="birthday" onChange={this.handleChange} value={this.state.birthday}>Date of Birth</InputFieldGroup>
              <InputFieldGroup type="text" name="email" onChange={this.handleChange} value={this.state.email}>Email Address</InputFieldGroup>
              <InputFieldGroup type="text" name="work_phone" onChange={this.handleChange} value={this.state.work_phone}>Work Phone</InputFieldGroup>
              <InputFieldGroup type="text" name="mobile_phone" onChange={this.handleChange} value={this.state.mobile_phone}>Mobile Phone</InputFieldGroup>
              <InputFieldGroup type="text" name="home_phone" onChange={this.handleChange} value={this.state.home_phone}>Home Phone</InputFieldGroup>
              <InputDropdownGroup options={preferred_phone_arr}>Preferred Phone</InputDropdownGroup>
              <Dropdown options={preferred_phone_arr}/>
              <InputFieldGroup type="text" name="fb_page" onChange={this.handleChange} value={this.state.fb_page}>Facebook Page</InputFieldGroup>
              <InputFieldGroup type="text" name="twitter_handle" onChange={this.handleChange} value={this.state.twitter_handle}>Twitter Handle</InputFieldGroup>
              <InputFieldGroup type="text" name="insta_user" onChange={this.handleChange} value={this.state.insta_user}>Instagram Username</InputFieldGroup>
              <InputFieldGroup type="text" name="linkedin_prof" onChange={this.handleChange} value={this.state.linkedin_prof}>LinkedIn Profile</InputFieldGroup>
            </InputSection>
            <InputSection name="Demographic Information">
              <InputDropdownGroup options={gender_arr}>Gender</InputDropdownGroup>
              <Dropdown options={gender_arr}/>
              <InputDropdownGroup options={is_hisp_latino_arr}>Do you consider yourself Hispanic or Latino?</InputDropdownGroup>
              <Dropdown options={is_hisp_latino_arr}/>
              <InputDropdownGroup options={race_arr}>Race </InputDropdownGroup>
              <Dropdown options={race_arr}/>
              <InputDropdownGroup options={languages_arr}>Do you speak any languages other than English?</InputDropdownGroup>
              <Dropdown options={languages_arr}/>
              <InputDropdownGroup options={special_accomodations_arr}>Do you need any special accommodations in order to participate in training or performing tasks at work?</InputDropdownGroup>
              <Dropdown options={special_accomodations_arr}/>
              <InputDropdownGroup options={citizenship_arr}>I attest, under penalty of perjury, that I am a (choose one of the following):</InputDropdownGroup>
              <Dropdown options={citizenship_arr}/>
              <InputDropdownGroup options={valid_id_arr}>Do you have a valid form of identification?</InputDropdownGroup>
              <Dropdown options={valid_id_arr}/>
              <InputDropdownGroup options={form_id_arr}>What type of identification do you have?</InputDropdownGroup>
              <Dropdown options={form_id_arr}/>
              <InputDropdownGroup options={license_type_arr}>What type of Driver's License do you have?</InputDropdownGroup>
              <Dropdown options={license_type_arr}/>
              <InputDropdownGroup options={transportation_arr}>What is your primary method of transportation?</InputDropdownGroup>
              <Dropdown options={transportation_arr}/>
              <InputDropdownGroup options={housing_status_arr}>What is your housing status?</InputDropdownGroup>
              <Dropdown options={housing_status_arr}/>
              <InputDropdownGroup options={risk_homeless_arr}>Are you at risk of becoming homeless?</InputDropdownGroup>
              <Dropdown options={risk_homeless_arr}/>
              <InputDropdownGroup options={over_24_arr}>Are you over 24?</InputDropdownGroup>
              <Dropdown options={over_24_arr}/>
              <InputDropdownGroup options={foster_care_arr}>Are you currently in foster care?</InputDropdownGroup>
              <Dropdown options={foster_care_arr}/>
              <InputDropdownGroup options={parents_incarcerated_arr}>Are either of your parents incarcerated?</InputDropdownGroup>
              <Dropdown options={parents_incarcerated_arr}/>
              <InputDropdownGroup options={juvie_arr}>Have you ever been part of the juvenile justice system?</InputDropdownGroup>
              <Dropdown options={juvie_arr}/>
              <InputDropdownGroup options={reside_single_parent_arr}>Do you reside in a single-parent household?</InputDropdownGroup>
              <Dropdown options={reside_single_parent_arr}/>
              <InputDropdownGroup options={free_reduced_lunch_arr}>Do you receive free or reduced lunch at school?</InputDropdownGroup>
              <Dropdown options={free_reduced_lunch_arr}/>
              <InputDropdownGroup options={drop_high_school_arr}>Did you drop out of high school?</InputDropdownGroup>
              <Dropdown options={drop_high_school_arr}/>
              <InputDropdownGroup options={parenting_arr}>Are you parenting?</InputDropdownGroup>
              <Dropdown options={parenting_arr}/>
              <InputFieldGroup type="text" name="expected_due_date" onChange={this.handleChange} value={this.state.expected_due_date}>Expected Due Date</InputFieldGroup>
              <InputDropdownGroup options={lack_work_history_arr}>Do you lack significant work history?</InputDropdownGroup>
              <Dropdown options={lack_work_history_arr}/>
            </InputSection>
            <InputSection name="Household and Family Info">
              <InputDropdownGroup options={marital_status_arr}>Marital Status</InputDropdownGroup>
              <Dropdown options={marital_status_arr}/>
              <InputDropdownGroup options={annual_income_arr}>What is your household's annual income?</InputDropdownGroup>
              <Dropdown options={annual_income_arr}/>
              <InputFieldGroup type="text" name="children_under_17" onChange={this.handleChange} value={this.state.children_under_17}>How many children 17 years old and under live in your household?</InputFieldGroup>
              <InputFieldGroup type="text" name="adult_18_24" onChange={this.handleChange} value={this.state.adult_18_24}>How many young adults 18-24 years old live in your household?</InputFieldGroup>
              <InputFieldGroup type="text" name="adult_over_25" onChange={this.handleChange} value={this.state.adult_over_25}>How many adults live in your household?</InputFieldGroup>
              <InputDropdownGroup options={have_checking_arr}>Do you have a checking?</InputDropdownGroup>
              <Dropdown options={have_checking_arr}/>
              <InputDropdownGroup options={have_savings_account_arr}>Do you have a savings account?</InputDropdownGroup>
              <Dropdown options={have_savings_account_arr}/>
              <InputDropdownGroup options={have_payday_loan_arr}>Do you have a payday loan?</InputDropdownGroup>
              <Dropdown options={have_payday_loan_arr}/>
              <InputDropdownGroup options={have_car_loan_arr}>Do you have a car title loan?</InputDropdownGroup>
              <Dropdown options={have_car_loan_arr}/>
            </InputSection>
            <InputSection name="Public Assistance Benefits">
              <InputDropdownGroup options={public_assistance_arr}>Are you currently receiving any of the following forms of public assistance?</InputDropdownGroup>
              <Dropdown options={public_assistance_arr}/>
              <InputDropdownGroup options={selective_service_arr}>Are you registered with a selective service?</InputDropdownGroup>
              <Dropdown options={selective_service_arr}/>
            </InputSection>
            <InputSection name="Emergency Contact Information">
              <InputFieldGroup type="text" name="emergency_contact_name" onChange={this.handleChange} value={this.state.emergency_contact_name}>Emergency Contact Name</InputFieldGroup>
              <InputFieldGroup type="text" name="emergency_contact_relationship" onChange={this.handleChange} value={this.state.emergency_contact_relationship}>Emergency Contact Relationship to You</InputFieldGroup>
              <InputFieldGroup type="text" name="emergency_contact_mobile_phone" onChange={this.handleChange} value={this.state.emergency_contact_mobile_phone}>Emergency Contact Mobile Phone</InputFieldGroup>
              <InputFieldGroup type="text" name="emergency_contact_alternate_phone" onChange={this.handleChange} value={this.state.emergency_contact_alternate_phone}>Emergency Contact Alternate Phone</InputFieldGroup>
              <InputFieldGroup type="text" name="emergency_contact_address" onChange={this.handleChange} value={this.state.emergency_contact_address}>Emergency Contact Address</InputFieldGroup>
            </InputSection>
            <InputSection name="Military Status">
              <InputDropdownGroup options={veteran_arr}>Are you a veteran?</InputDropdownGroup>
              <Dropdown options={veteran_arr}/>
              <InputDropdownGroup options={military_status_arr}>Military Status</InputDropdownGroup>
              <Dropdown options={military_status_arr}/>
              <InputFieldGroup type="text" name="date_discharge" onChange={this.handleChange} value={this.state.date_discharge}>Date of Discharge</InputFieldGroup>
              <InputDropdownGroup options={branch_served_arr}>Which branch did you serve in?</InputDropdownGroup>
              <Dropdown options={branch_served_arr}/>
            </InputSection>
            <InputSection name="Client Needs">
              <InputFieldGroup type="text" name="rate_below" onChange={this.handleChange} value={this.state.rate_below}>Please rate the three services that you are most interested in below:</InputFieldGroup>
              <InputDropdownGroup options={high_priority_arr}>Highest Priority</InputDropdownGroup>
              <Dropdown options={high_priority_arr}/>
              <InputDropdownGroup options={medium_priority_arr}>Medium Priority</InputDropdownGroup>
              <Dropdown options={medium_priority_arr}/>
              <InputDropdownGroup options={low_priority_arr}>Lowest Priority</InputDropdownGroup>
              <Dropdown options={low_priority_arr}/>
              <InputDropdownGroup options={availability_arr}>What is your availability for these activities?</InputDropdownGroup>
              <Dropdown options={availability_arr}/>
              <InputDropdownGroup options={time_invest_arr}>How much time are you able or willing to invest in a program?</InputDropdownGroup>
              <Dropdown options={time_invest_arr}/>
              <InputDropdownGroup options={block_get_job_arr}>What do you believe has kept you from getting a job?</InputDropdownGroup>
              <Dropdown options={block_get_job_arr}/>
              <InputDropdownGroup options={prevent_maintain_job_arr}>What has prevented you from maintaining a job?</InputDropdownGroup>
              <Dropdown options={prevent_maintain_job_arr}/>
              <InputFieldGroup type="text" name="expected_wage" onChange={this.handleChange} value={this.state.expected_wage}>What is your wage expectation?</InputFieldGroup>
              <InputDropdownGroup options={drug_screening_arr}>Are you able to take and pass a drug screening within 24 hours?</InputDropdownGroup>
              <Dropdown options={drug_screening_arr}/>
              <InputDropdownGroup options={share_SER_arr}>Are you interested in sharing your SER story after receiving SER services?</InputDropdownGroup>
              <Dropdown options={share_SER_arr}/>
              <InputFieldGroup type="text" name="other" onChange={this.handleChange} value={this.state.other}>Is there anything else you think we should know?</InputFieldGroup>
            </InputSection>

            {isSubmitted ? 
              <button className={styles.submittedButton}>Submitted! 🎉</button>
              :
              <button className={styles.submitButton}>Submit</button>
            }
          </form>
      </div>
    );
  }
}

export default SerApplication;

