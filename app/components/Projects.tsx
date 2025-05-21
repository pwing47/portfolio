import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

const Projects = () => {
    return (
        <div className="content py-10">
          <h2 className={`${inter.className} text-4xl capitalize font-extrabold tracking-tight`}>Projects</h2>

          <p>Let's chat! <a href="mailto:philip.cowles@gmail.com">Email me</a> or use the form to get in touch.</p>

          <div id="contact_form">
            <span className="pre_header">Name</span>
            <div className="input_wrapper"><input type="text" id="txt_name" name="txt_name" /></div>
            <div id="error_name" className="form_error"></div>

            <span className="pre_header">Email</span>
            <div className="input_wrapper"><input type="text" id="txt_email" name="txt_email" /></div>
            <div id="error_email" className="form_error"></div>

            <span className="pre_header">Message</span>
            <div className="input_wrapper"><textarea id="txt_message" name="txt_message"></textarea></div>
            <div id="error_message" className="form_error"></div>

            <input id="btn_send" name="submit" type="submit" value="Send Away!" />
          </div>
          <div id="form_success"><h4>Thanks for your message!</h4>I'll get back to you soon!</div>
        </div>
    )
}

export default Projects