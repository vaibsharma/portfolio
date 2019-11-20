import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Divider, Header, Item, Label } from 'semantic-ui-react';
import { Row, Column, Space, BlogList } from "../../Components"
import { initApp } from "../../Actions";

import Cuemath from "../../Images/cuemath.jpg";
import GSoC from "../../Images/gsoc.png";
import Unacademy from "../../Images/unacademy.png";

const workExperience = [
    {
        title: "Unacademy",
        image: Unacademy,
        subtitle: "Software Developer, June 2019 - Present",
        content: "Building Unacademy's Live classes for educators and students on Unacademy Plus. " +
            "Unacademy is an educational technology company based in Bangalore. " +
            "It is a platform that offers online education in India."
    },
    {
        title: "Cuemath",
        image: Cuemath,
        subtitle: "Software Development Intern, May 2018 - August 2018",
        content: "Worked on the microservices hosted inside the Docker containers, Cueteacher and" +
            " Cueparent Mobile application. Made the Parent-Teacher-Student interaction flow from the scratch." +
            " Added Voice OTP feature, all from mobile to auth service. Lots of other fixes in internal tools " +
            "in the Cuemath backend application."
    },
    {
        title: "Google Summer of Code",
        image: GSoC,
        subtitle: "Australian Open Source Software Innovations and Education.",
        content: "In 2017, my proposal for the Carbon Footprint project was accepted by the AOSSIE " +
            "in the Google Summer of Code. I worked on the Carbon Footprint webextension and made Carbon Footprint " +
            "RESTful APIs from the scratch. Since then I'm involved with AOSSIE as the project mentor for the " +
            "students participating in this prestigious program. I mentor for Carbon Footprint projects " +
            "and CrowdAlert webapp at AOSSIE."
    },

];

const BlogRSSFeedUrl = 'https://techobistword.wordpress.com/feed/?format=xml';

const technologies = [
    "C++", "NodeJS", "Django", "Flask", "Docker", "Heroku", "Git", "Markup", "LATex", "ReactJS", "ReactNative", "Redux",
    "Linux", "MacOS", "CI/CD", "Jenkins"
];

class Home extends Component {
    constructor(props){
        super(props);
        console.log('start App', this.props);
    }

    static defaultProps = {
        startApp: PropTypes.object,
        actions: PropTypes.object
    };

    componentDidMount() {
        document.title = "Home - Vaibhav Sharma";
        this.props.actions.initApp();
    }

    renderIntroduction(){
        return(
            <p style={styles.p}>
                Hi! I am Vaibhav Sharma (vaibsharma). I am a final year Engineering Physics student from <b>Delhi
                Technological University</b> who loves Physics as well as enjoy Programming. I work on system
                architecture, web and mobile applications. I've been a GSoC student at <b>AOSSIE(Australian Open
                Source Software
                Innovations and Educations)</b> in 2017 and mentor in 2018. I'll be joining <b>Unacademy</b> as a
                Software Engineer from June 2019. I like to play cricket, go to gym and read books in my leisure
                time.
            </p>
        )
    }

    renderWorkExperience(){
        return(
            <div>
                <Header as={"h1"}> Work Experience </Header>
                <Row>
                    {workExperience.map(({title, image, subtitle, content}, key) => (
                        <Column key={key}>
                            <Row>
                                <Column mobile={4} tablet={4} computer={4}>
                                    <Item.Image size='tiny' src={image}/>
                                </Column>
                                <Column mobile={12} tablet={12} computer={12}>
                                    <Header as={"h2"}>{title}</Header>
                                    <span>{subtitle}</span>
                                    <Space/>
                                    <p> {content}</p>
                                </Column>
                            </Row>
                        </Column>
                    ))}
                </Row>
            </div>
        );
    }

    renderTechnologies(){
        return(
            <div>
                <Header as={"h1"}> Technologies </Header>
                <Space/>
                <Row style={{marginLeft: 0}}>
                    {technologies.map((value, key) => (
                        <Label key={key} size={"medium"} style={styles.technologies}>
                            {value}
                        </Label>
                    ))}
                </Row>
            </div>
        )
    }

    render() {
        console.log(this.props.startApp.onUpdate.getTime(),this.props.startApp.onStart.getTime());
        return (
            <div style={styles.container}>
                <Space/>
                {this.renderIntroduction()}
                <Space/>
                {this.renderWorkExperience()}
                <Space/>
                {this.renderTechnologies()}
                <Space style={{ height: "5em" }}/>
                <Divider/>
                <Space/>
                <div>
                    <Header as={"h1"}> Blogs </Header>
                    <BlogList url={BlogRSSFeedUrl}/>
                    <Space/>
                    <Header size={"large"}>
                        For more blogs please visit <a href="https://techobistword.wordpress.com/">wordpress.</a>
                    </Header>
                </div>
                <Header size={"medium"} textAlign={"center"}>
                    Made with <span>❤️</span> by <a style={styles.a} href={"https://github.com/vaibsharma"}> vaibsharma </a>
                </Header>
                <Space/>
                <Space/>
            </div>
        );
    }
}

const styles = {
    p: {
        fontSize: '1.3em',
        lineHeight: '1.4em',
        marginTop: '1em',
        color: '#595959'
    },
    a: {
        textDecoration: 'none',
        color: 'inherit'
    },
    container:{
      marginLeft: '1em',
      marginRight: '1em'
    },
    technologies:{
        marginTop: '1em'
    }
};

const mapStateToProps = state => ({
    startApp: state.startApp
});

export default connect(mapStateToProps, (dispatch) => {
    return {
        actions: bindActionCreators({
            initApp
        }, dispatch)
    }
})(Home);