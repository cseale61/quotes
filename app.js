module.exports = {   
    
    quote: function() {

        let quotes = [
            'One man\’s “magic” is another man\’s engineering. “Supernatural” is a null word.',
            'Never underestimate the power of human stupidity.',
            'Modesty has never been one of my vices.',
            'Never attempt to teach a pig to sing; it wastes your time and annoys the pig.',
            'You get less work done if you persist in getting up yawning and still tired. You aren’t sharp and make mistakes and have to do it over.',
            'Latin is majestic, especially when you don\’t understand it.',
            'Compound interest is murder.',
            'Privacy is as necessary as company; you can drive a man crazy by depriving him of either.',
            'By the data to date, there is only one animal in the Galaxy dangerous to man – man himself. So he must supply his own indispensable competition. He has no enemy to help him.',
            'Any priest or shaman must be presumed guilty until proved innocent.',
            'Always listen to experts. They\’ll tell you what can’t be done, and why. Then do it.',
            'There is no conclusive evidence of life after death. But there is no evidence of any sort against it. Soon enough you will know. So why fret about it?',
            'A “pacifist male” is a contradiction in terms.',
            'What a wonderful world it is that has girls in it!',
            'History does not record anywhere at any time a religion that has any rational basis. Religion is a crutch for people not strong enough to stand up to the unknown without help.',
            'If you don’t like yourself, you can’t like other people.',
            'No state has an inherent right to survive through conscript troops and, in the long run, no state ever, has. Roman matrons used to say to their sons: “Come back with your shield, or on it.” Later on, this custom declined. So did Rome.',
            'Cheops\’ Law: Nothing ever gets built on schedule or within budget.',
            'Everything in excess! To enjoy the flavor of life, take big bites. Moderation is for monks.',
            'Men rarely (if ever) manage to dream up a god superior to themselves.',
            'You can have peace. Or you can have freedom. Don\’t ever count on having both at once.',
            'Avoid making irrevocable decisions while tired or hungry.',
            'An elephant: A mouse built to government specifications.',
            'Stupidity is the only universal capital crime.',
            'Courage is the complement of fear. A man who is fearless cannot be courageous. (He is also a fool).',
            'People who go broke in a big way never miss any meals.',
            'Anyone who cannot cope with mathematics is not fully human. At best he is a tolerable subhuman who has learned to wear shoes.',
            'Specialization is for insects.',
            'The more you love, the more you can love – and the more intensely you love.',
            'Everybody lies about sex.',
            'Taxes are not levied for the benefit of the taxed.',
            'A competent and self-confident person is incapable of jealousy in anything. Jealousy is invariably a symptom of neurotic insecurity.',
            'Money is the sincerest of all flattery.',
            'You live and learn. Or you don\’t live long.',
            '“Of course” means you had best check it yourself.',
            'Do not handicap your children by making their lives easy.',
            'Complexity is contrary to the basic principle of successful lying.',
            'Money is the universal weapon.',
            'It is never foolish to love.',
            'A generation which ignores history has no past and no future.',
            'Make money, lose money – who cares? The idea is to enjoy it.',
            'There is always a last mistake.',
            'If the human animal has any value at all, he is too valuable to be property. If he has any inner dignity, he is much too proud to own other men.',
            'Shakespeare and I never let grammar interfere with expressing ourselves.',
            'Some people are ants by nature; they have to work, even when it\’s useless. Few people have a talent for constructive laziness.',
            'It\’s much safer to break a law knowingly than to do so through ignorance.',
            'No matter where or what, there are makers, takers, and fakers.',
            'To stay young requires unceasing cultivation of the ability to unlearn old falsehoods.',
            'A “critic” is a man who creates nothing and thereby feels qualified to judge the work of creative men. There is logic in this; he is unbiased – he hates all creative people equally.',
            'Secrecy is the beginning of tyranny.',
            'Being generous is inborn; being altruistic is a learned perversity.',
            'Sin lies only in hurting other people unnecessarily. All other “sins” are invented nonsense. (Hurting yourself is not sinful – just stupid.)',
            'A committee is a life form with six or more legs and no brain.',
            'If you are part of a society that votes, then do so. There may be no candidates and no measures you want to vote for ... but there are certain to be ones you want to vote against.',
        ];

        // 0 to 54

        let element = Math.floor(Math.random() * 55);

        let data = {
            quote: quotes[element],
            source: "From the Notebook of Lazareth Long (Time Enough for Love), by Robert A. HeinLein"
        };

        return data;

    }

}