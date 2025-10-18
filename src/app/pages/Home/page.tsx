// If you want to use CSS Modules, rename your CSS file to 'home.module.css' and update the import:
import styles from "../../styles/home.module.css";

// Or, if you want to use a global CSS file, use:


export default function Home(){
    return(
        <div className={styles.page}>
        
        <p   className={styles.content}>
            <p className={styles.title}>Summary</p>
            With over 20 years of IT experience, including 18 years in financial services and 
            enterprise SaaS delivery, I have led large-scale Agile transformations using SAFe, Scrum, 
            and Kanban across globally distributed teams. My work focuses on translating C-suite 
            strategies into actionable, metrics-driven delivery roadmaps while improving delivery velocity,
            planning accuracy, and cross-team alignment. I have successfully integrated AI tools into 
            processes to enable smarter, automated decision-making agents and am recognized for 
            strong stakeholder communication, effective risk management, and driving 
            continuous improvement in high-impact environments.
        </p>
        </div>
    )
}