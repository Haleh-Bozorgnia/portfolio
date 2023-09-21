import {motion} from 'framer-motion'
import '../style.css'
function Home(){
    return (
      <div className="home">
        <motion.div
          className="name"
          initial={{ x: -300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span style={{ color: "rgb(244, 3, 204)", fontSize: "3rem" }}>
            Haleh Bozorgnia
          </span>
        </motion.div>
        <motion.div
          className="desc"
          initial={{ x: 300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span style={{ fontSize: "4rem" }}>Full Stack Developer</span>
        </motion.div>
        <motion.div
          className="name"
          initial={{ x: -300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p style={{ fontSize: "3rem" }}>
            I am a skilled and passionate web developer with experience in
            creating visually appealing and user-friendly website
          </p>
        </motion.div>
      </div>
    );
}
export default Home