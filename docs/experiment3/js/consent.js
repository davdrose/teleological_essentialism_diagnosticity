const time = '3-5 minutes';

const consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <p><b>Consent Form</b></p>
    <div style="text-align:left;
       background-color:lightblue; padding:20px; max-width:900px;">
       <p><b>Description:</b> Welcome! Thank you for agreeing to take 
        part in this study. We appreciate your time and effort. In this 
        study, we will present you with a fictional scenario, and then 
        we will ask you to answer a brief series of questions about that 
        scenario.The questions have no right or wrong answers--we&apos;re 
        just exploring features of human psychology in this research.
       </p>
       <p> <b>Risks and benefits:</b> We do not anticipate any risks from 
       participating in this research. While you will not directly benefit 
       from taking part in this research study, we hope society and the scientific 
       community will benefit from the knowledge gained about human psychology 
       and judgment.
       <br><br>
       The research data will be collected anonymously. We will not ask you to
       provide any personally identifiable information (such as an email-address, 
       name, etc.) and will not be able to link your response to you. We anticipate 
       that your participation in this survey presents no greater risk than everyday use of 
       the Internet. Of course, please note that there is always the possible risk 
       of intrusion by outside agents (i.e. hacking) whenever information shared over 
       the Internet. In order to keep your identifying information and data from this 
       study separate, we will host the survey on an unaffiliated platform, Qualtrics. 
       Thus, Prolific will not have access to the data you provide us. Additionally, 
       we will not ask for directly or indirectly identifiable information in the survey.
       </p>
       <p><b>Time involvement:</b> Your involvement should take about 3 minutes. 
       </p>
       <p><b> Payment:</b>You will be paid $0.50 for your time and efforts. 
       </p>
       <p><b>Subject's rights:</b> Your participation is voluntary and you 
       can stop at any time. If you consent to take part in this survey, 
       please indicate so below,and then click the arrow to advance. If not,
       simply close your browser window.
       </p>
       <p><b>Contact information:</b>If you have any questions about the research study, 
       please contact Shaun Nichols (sbn44@cornell.edu) at Cornell University. 
       If you have any questions or concerns regarding your rights as a subject in this 
       study, you may contact the Institutional Review Board (IRB) for Human Participants 
       at 607-255-5138 or access their website at http://www.irb.cornell.edu. You may 
       also report your concerns or complaints anonymously through Ethicspoint online at 
       www.hotline.cornell.edu or by calling toll free at 1-866-293-3077. Ethicspoint is 
       an independent organization that serves as a liaison between the University and 
       the person bringing the complaint so that anonymity can be ensured.
       </p>
       <p>Taking part in this study is voluntary. You can stop at any time. 
       Withdrawal or refusal to participate will not result in any penalty. 
       You do not waive any legal rights or release any agent from liability for 
       negligence by consenting to participate.
       <br>
       </p>
       <p>If you consent to take part in this survey, please indicate so below.
       </p>
    </div>
    <p> Do you agree with the terms of the experiment as explained above? 
    </p>
    `,
    choices: ['I agree'],
};
