import './blog.scss';
import React, { useEffect } from 'react';
import $ from 'jquery';

const Blog = () => {
    useEffect(() => {
        let greetingMessages = Array.prototype.slice.call(document.getElementsByClassName('text'));
        greetingMessages.forEach((greetingMessage, ind) => {
            let letters = greetingMessage.innerHTML.split('');
            let nHTML = ''
            for (var letter of letters) {
                nHTML += letter === ' ' ? "<span class='rubberBand'> &nbsp; </span>" : "<span class='rubberBand'>" + letter + "</span>";
            }
            document.getElementsByClassName('text')[ind].innerHTML = nHTML;
        });

        $(".rubberBand").hover(function () {
            // alert("Hello")
            $(this).addClass("animated");
        })

        $(".rubberBand").on("webkitAnimationEnd mozAnimationEnd animationend", function () {
            $(this).removeClass("animated")
        })
    });

    const quotes = [
        { quote: 'Don’t say anything online that you wouldn’t want plastered on a billboard with your face on it.', author: '~ Erin Bury' },
        { quote: 'I’m a big believer in just getting it out there: create a minimal viable product or website, launch it, and get feedback.', author: '~ Neil' },
        { quote: 'The best time to act on this was yesterday. The second best time is now.', author: '~ Ankeet Kumar Hanny' },
        { quote: 'The first step in blogging is not writing them but reading them.', author: '~ Jeff Jarvis' },
        { quote: 'Conversation is king. Content is just something to talk about.', author: '~ Cory Doctorow' },
        { quote: 'Blogging is good for your career. A well-executed blog sets you apart as an expert in your field.', author: '~ Penelope Trunk' },
        { quote: 'I’m all for the keyboard. I believe more in the keyboard than I do in the pencil.', author: '~ Ankeet Kumar Hanny' },
        { quote: 'Write. Rewrite. When not writing or rewriting, read. I know of no shortcuts.', author: '~ Larry L. King' },
        { quote: 'The process of rewriting is enjoyable, because you’re not in that existential panic when you don’t have a novel at all.', author: '~ Rose Tremain' },
        { quote: 'The process of rewriting is enjoyable, because you’re not in that existential panic when you don’t have a novel at all.', author: '~ Rose Tremain' }
    ]
    const randomNumber = parseInt(Math.random() * 10);
    const obj = quotes[randomNumber];

    return (
        <div className='section'>
            <center>
                <h1 className="text">BLOG</h1>
                <div className='coming-soon'>
                    <div className='coming-soon-text-area'>
                        <h2>Coming Soon</h2>
                    </div>
                </div>
                <div className='quote-section'>
                    <p className='quote'>{obj.quote}</p>
                    <p className='author'>{obj.author}</p>
                </div>
            </center>
        </div>
    )
}

export default Blog;