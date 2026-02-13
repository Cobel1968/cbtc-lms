export const generateLearningContract = (studentName: string, courseTitle: string, timeSaved: number) => {
  return 
    <div style="font-family: serif; padding: 40px; color: #1e293b; line-height: 1.6;">
      <h1 style="text-align: center; color: #1e3a8a;">LEARNING & VOCATIONAL TRAINING CONTRACT</h1>
      <p style="text-align: center; font-weight: bold;">Cobel Business Training Center</p>
      <hr />
      
      <section>
        <h3>1. PARTIES</h3>
        <p>This agreement is made between <strong>Cobel Business Training Center</strong>, represented by 
        <strong>Coulibaly Abel, PGCE, MBA, NEBOSH</strong> (CEO), and the Student, <strong>\</strong>.</p>
      </section>

      <section>
        <h3>2. ACCELERATED PATHWAY (COBEL AI ENGINE)</h3>
        <p>Based on the Multi-Dimensional Diagnostic, the Student has been credited with <strong>\ hours</strong> 
        of prior technical fluency. The curriculum density has been adjusted accordingly.</p>
      </section>

      <section>
        <h3>3. GOVERNANCE</h3>
        <p>This training follows the Computer-Implemented Pedagogical Logic developed by Abel C. 
        All technical assessments are subject to AI-verified handwriting analysis.</p>
      </section>

      <div style="margin-top: 50px; display: flex; justify-content: space-between;">
        <div style="text-align: center;">
          <p>__________________________</p>
          <p style="font-size: 12px;">\<br />Student</p>
        </div>
        <div style="text-align: center;">
          <p><em>Coulibaly Abel</em></p>
          <p>__________________________</p>
          <p style="font-size: 12px;">Coulibaly Abel, CEO<br />Cobel Training Center</p>
        </div>
      </div>
    </div>
  ;
}

export const generateEmploymentContract = (trainerName: string, hourlyRate: number) => {
  return 
    <div style="font-family: serif; padding: 40px; color: #1e293b;">
      <h1 style="text-align: center; color: #1e3a8a;">TRAINER EMPLOYMENT AGREEMENT</h1>
      <hr />
      <p>This contract appoints <strong>\</strong> as a Vocational Instructor. 
      Compensation is set at <strong>$\ per hour</strong>, calculated <strong>pro-rata</strong> 
      of the digital courses dispensed and verified by the LMS.</p>
      
      <p>The Trainer agrees to facilitate bilingual instruction (English/French) as mapped by the 
      Cobel AI Engine's technical dictionary.</p>

      <div style="margin-top: 50px; text-align: right;">
        <p><em>Coulibaly Abel</em></p>
        <p>__________________________</p>
        <p style="font-size: 12px;">CEO, Cobel Business Training Center</p>
      </div>
    </div>
  ;
}