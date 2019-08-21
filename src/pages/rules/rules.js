import React, { Component } from 'react';
import './rules.css';
import Fade from 'react-reveal/Fade';

/*implement viewing tabs for this to make it more accesible*/

export default class Rules extends Component {
    render(){
        return(
            <section className='rules-wrapper'>
                <div id='paralax-1'>
                    <h1>DOJANG RULES</h1>
                </div>
                
                <Fade top delay={500}>
                <div className="dojang">
                    <p>These rules will be followed without exception.</p>
                    <ul className="list">
                        <li>
                            Bow to the master or instructor and to the flag when entering and<br/>
                            leaving the dojang.
                        </li>
                        
                        <li>
                            When addressed by the master or instructor, answer, "yes sir/no sir"<br/>
                            or "yes ma'am no ma'am"
                        </li>

                        <li>
                            If you arrive to class after it has begun, enter dojang and ask instructor<br/>
                            for permission from instructors to join class
                        </li>
                        
                        <li>
                            The following are prohibited in the dojang and on mats: shoes, chewing gum,<br/> 
                            intoxication, bad language, bad behavior, and disrespect.
                        </li>
                        
                        <li>
                            Always wear a clean uniform.
                        </li>
                        
                        <li>
                            Students should not have leave from class without permission from instructor.
                        </li>
                        
                        <li>
                            When sparring, students must be wearing sparring gear, and maximum must be used.
                        </li>
                        
                        <li>
                            Control Senior belt students will set a good example, they will show respect<br/>
                            for and help lower belt students.
                        </li>
                        
                        <li>
                            Do not use Tae Kwon Do to hurt anyone, never degrade Tae Kwon Do for the<br/>
                            reputation of the school.
                        </li>
                        
                        <li>
                            You must have permission from your instructor to participate in any tournament<br/>
                            or martial arts activity.
                        </li>
                        
                        <li>
                            Parents will limit their viewing time to twice a month.
                        </li>
                        
                        <li>
                            <b>Children who do not obey DOJANG RULES may be reduced in rank.</b>
                        </li>
                    </ul>
                    
                </div>
                </Fade>

                <div id='paralax-2'><h1>HOME RULES</h1></div>
                <Fade top delay={500}>
                <div className="children">
                    <ul>
                        <li>
                            Children shall greet their parents when they enter the house and tell them goodbye<br/>
                            when they leave. Children will at all times be respectful to their parents<br/>
                            and grandparents.
                        </li>

                        <li>
                            Children will at all times be truthful.
                        </li>

                        <li>
                            Children will strive for a good relationship with their brothers and sisters.
                        </li>

                        <li>
                            Children will willingly help with household chores.
                        </li>

                        <li>
                            Children shall report to their parents that they  have completed assigned tasks.
                        </li>

                        <li>
                            Children shall be responsible for the upkeep and neatness of their own room.
                        </li>

                        <li>
                            Children will practice daily cleanliness in the matters of physical appearance.
                        </li>

                        <li>
                            Children shall abide by their parent's decisions.
                        </li>

                        <li>
                            Children shall not interrupt adult conversations.
                        </li>

                        <li>
                            Children shall possess an active mind, body and spirit
                        </li>

                        <li>
                            Children shall refrain from rowdy behavior at home.
                        </li>

                        <li>
                            Children will diligently study their schoolwork both at school and at home.
                        </li>

                        <li>
                            Children will at all times show respect for their school teachers and their peers.
                        </li>
                        
                        <li>
                            <b>Children who do not obey HOME RULES may be reduced in rank.</b>
                        </li>
                    </ul>     
                </div>
                </Fade>
            </section>
        );
    }
}