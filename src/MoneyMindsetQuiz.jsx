import React, { useState } from 'react';
import { Moon, Sparkles, TrendingUp, Shield, RefreshCw, Heart, Star } from 'lucide-react';

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const MAILERLITE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZjkwZDUyZmU5NTkyYjQxYzhmMzYwMjZmM2YxMDFhNzYxZjQ1YTRlMzM4MzQ5YzVkNzllZDFkZTAxMTk0YWU5ZmFiNDAzZjQ1ZjRlMzJhMWEiLCJpYXQiOjE3ODAxOTE2ODMuOTE2OTkxLCJuYmYiOjE3ODAxOTE2ODMuOTE2OTkzLCJleHAiOjQ5MzU4NjUyODMuOTEyNTgyLCJzdWIiOiIyMzAxMDU3Iiwic2NvcGVzIjpbXX0.QzKlfHvAFCwDrOINdYq8an193CtWTarSI32hSCNUDynNVswziYViTm59Mmr5oZ3vjYe6QXdrFccLbozLeb0DG8Up8WoAZP5xvE0X0c3dzi3gyNWkouH3jK8E3CPSlh-9tJEY70ngL3vSmAY4eoMiWMGv10ghSqr1t5SbS61tQxN4xumQ-75A5lECkiKHXeyYjtjynJWUWAGbr9r-XVFpYnYMi2P9fYV-OSgFg4H2znsvZ2VgcyLaU5tqwrntR_2zLCOhTaqUY1gHSR1k-ri7iHTDOxBmdja7PXMR1D-J1V27DD8WLCxUBheEHv-1w5OsqSSiCtJ8yo0QqXrIEOVFV-yOO41cFBRiRE9HL3fgUh3G9HyAq5dgZbw_zckusXJY4-wk2LePiYevm1seSGjBpLEWl9Q1rTosmqA-96gXTwhezJfdzpilKCNiDHe_YLfwXMoxLTjDANWW4hDkcVTFGlzZ3IXLFF3jtkYWPmaTrMUPV269t87bWCZgMB9oHlk_QqYjTXyHsZEfDrpGhVqpuSAz2N2OTAuTjv9BU-OXqI-vM1AEIa_iWrGWX59bCSBRMX4c3f7fP1fFT_OZRDtUTvFDs4iBVvOeB0uGGNtEKgj-Y-boxgB6iP7LSTCXjc08dueXy431PtdF7d2zrFjGTRHD4NGbqR6fc1MNLCtWFxg';
const MAILERLITE_GROUP_NAME = 'Money Mindset Quiz'; // from MailerLite → Subscribers → Groups
// ─────────────────────────────────────────────────────────────────────────────

const questions = [
  {
    id: 1,
    text: "When you think about money, you feel:",
    options: [
      { value: 'a', text: "Anxious and stressed" },
      { value: 'b', text: "Cautious and careful" },
      { value: 'c', text: "Frustrated and blocked" },
      { value: 'd', text: "Guilty for wanting more" },
      { value: 'e', text: "Confident and capable" }
    ]
  },
  {
    id: 2,
    text: "Your bank account balance is:",
    options: [
      { value: 'a', text: "Something you avoid looking at" },
      { value: 'b', text: "Something you check obsessively" },
      { value: 'c', text: "Never enough, no matter what" },
      { value: 'd', text: "Okay but you feel weird about it" },
      { value: 'e', text: "Growing steadily" }
    ]
  },
  {
    id: 3,
    text: "When opportunity comes:",
    options: [
      { value: 'a', text: "You assume it'll fall through" },
      { value: 'b', text: "You overthink until it's too late" },
      { value: 'c', text: "You self-sabotage somehow" },
      { value: 'd', text: "You feel undeserving" },
      { value: 'e', text: "You take aligned action" }
    ]
  },
  {
    id: 4,
    text: "Your relationship with spending is:",
    options: [
      { value: 'a', text: "Scarcity-driven panic buying or deprivation" },
      { value: 'b', text: "Hyper-controlled, every penny tracked" },
      { value: 'c', text: "Boom and bust cycles" },
      { value: 'd', text: "Guilt after every purchase" },
      { value: 'e', text: "Intentional and balanced" }
    ]
  },
  {
    id: 5,
    text: "You believe wealth is:",
    options: [
      { value: 'a', text: "For other people, not you" },
      { value: 'b', text: "Possible but requires extreme sacrifice" },
      { value: 'c', text: "Something you'll lose if you get it" },
      { value: 'd', text: "Wrong or immoral to want" },
      { value: 'e', text: "Available and aligned with your values" }
    ]
  },
  {
    id: 6,
    text: "Your biggest money fear is:",
    options: [
      { value: 'a', text: "Never having enough" },
      { value: 'b', text: "Losing what you have" },
      { value: 'c', text: "Repeating past patterns" },
      { value: 'd', text: "Becoming someone you don't like" },
      { value: 'e', text: "None of these resonate" }
    ]
  },
  {
    id: 7,
    text: "What you want most:",
    options: [
      { value: 'a', text: "To feel safe with money" },
      { value: 'b', text: "To trust yourself with money" },
      { value: 'c', text: "To break the cycle" },
      { value: 'd', text: "To want money without guilt" },
      { value: 'e', text: "To expand what's possible" }
    ]
  }
];

const resultTypes = {
  a: {
    type: 'Scarcity Survivor',
    icon: Shield,
    color: '#8B4513',
    headline: "You're a Scarcity Survivor",
    description: "Your money mindset is shaped by the belief that there's never enough. This isn't just pessimism—it's a survival response. Somewhere along the way, you learned that money is scarce, unpredictable, and dangerous to hope for. Maybe you grew up watching pennies stretched to breaking, or experienced sudden financial loss that rewired your nervous system.\n\nYou might hoard resources 'just in case,' make fear-based decisions, or find it impossible to enjoy what you have because you're always bracing for loss. Even when things are objectively okay, your body remembers scarcity.",
    origin: "This mindset typically stems from financial trauma or childhood scarcity—witnessing struggle, experiencing sudden loss, or absorbing a caregiver's constant money anxiety.",
    patterns: [
      "Hoarding money or resources while feeling guilty about it",
      "Making decisions from fear rather than vision",
      "Unable to enjoy purchases or celebrate wins",
      "Catastrophizing about worst-case scenarios",
      "Feeling like safety is always one crisis away"
    ],
    needs: [
      "Nervous system regulation practices that create felt safety",
      "Small, consistent evidence-gathering that abundance exists",
      "Permission to enjoy resources without waiting for disaster",
      "Ritual practices that ground you in present-moment security"
    ],
    recommendation: "The Money Magic Journal guides you through transforming scarcity responses into safety and trust. Through 30 days of psychology-backed practices and grounding rituals, you'll rebuild your relationship with money from the nervous system up."
  },
  b: {
    type: 'Cautious Controller',
    icon: Moon,
    color: '#4A5D23',
    headline: "You're a Cautious Controller",
    description: "Your money mindset is built on hypervigilance: the belief that if you don't control everything, it will all fall apart. You track every penny, plan obsessively, and stay constantly alert for threats. This isn't anxiety—it's learned behavior. At some point, you witnessed or experienced financial chaos and decided: never again.\n\nThe exhausting part? You can't relax. Even when your finances are solid, you're scanning for what could go wrong. You might have money but can't enjoy it. Permission to spend feels dangerous. Flexibility feels like failure.",
    origin: "This mindset often develops from witnessing financial chaos—a parent's spending, sudden loss of stability, or being the responsible one who had to fix everyone else's money messes.",
    patterns: [
      "Obsessive tracking and budgeting that feels compulsive",
      "Inability to relax or enjoy financial wins",
      "Rigid spending rules that don't flex for life",
      "Anxiety when not in complete control",
      "Difficulty trusting others (or yourself) with money decisions"
    ],
    needs: [
      "Practice releasing control in small, safe doses",
      "Evidence that flexibility doesn't equal chaos",
      "Permission to enjoy money without constant vigilance",
      "Trust-building practices with yourself and your resources"
    ],
    recommendation: "The Money Magic Journal offers structured practices for releasing control while building genuine trust. You'll learn to distinguish between useful planning and exhausting hypervigilance—and create space for ease."
  },
  c: {
    type: 'Cycle Breaker',
    icon: RefreshCw,
    color: '#8B0000',
    headline: "You're a Cycle Breaker",
    description: "Your money mindset is stuck in a loop: the belief that you're doomed to repeat your family's financial patterns no matter how hard you try. You've watched the boom-bust cycles, the self-sabotage, the ways money slips away just when things start working. And some part of you believes it's inevitable for you too.\n\nYou might work hard, make progress, then inexplicably sabotage yourself. Or hit the same ceiling over and over. The frustration is real—you can see the pattern, you just can't seem to break it.",
    origin: "This mindset comes from generational poverty, inherited money shame, or watching the same patterns play out across your family. You absorbed the belief that 'this is just how it is for people like us.'",
    patterns: [
      "Self-sabotaging just as things start working",
      "Boom and bust cycles with money",
      "Hitting the same income ceiling repeatedly",
      "Feeling like you're fighting against fate",
      "Deep frustration that awareness isn't enough"
    ],
    needs: [
      "Active pattern interruption—doing something different",
      "New beliefs installed through repetition and evidence",
      "Sustainable systems that support your nervous system",
      "Permission to succeed where others didn't"
    ],
    recommendation: "The Money Magic Journal is designed specifically for pattern interruption. Through 30 days of intentional practice, you'll install new beliefs, build evidence of different outcomes, and finally break free from inherited limitations."
  },
  d: {
    type: 'Worth Seeker',
    icon: Heart,
    color: '#6B4423',
    headline: "You're a Worth Seeker",
    description: "Your money mindset is tangled with worthiness: the belief that wanting money makes you bad, greedy, or shallow. Maybe you learned that money is the root of evil, that spiritual people shouldn't care about wealth, or that good people sacrifice and struggle. So you undercharge, give too much, and feel guilty about every desire for more.\n\nThe painful irony? Your financial struggle doesn't make you more noble—it just makes you exhausted. You know logically that money is neutral, but emotionally, wanting it feels wrong.",
    origin: "This mindset often develops from religious or spiritual messages about money being evil, watching 'rich people' behave badly, or learning that your value comes from sacrifice and selflessness.",
    patterns: [
      "Undercharging or giving away your work",
      "Guilt after spending on yourself",
      "Belief that struggle equals virtue",
      "Difficulty receiving money or compliments",
      "Secretly wanting wealth while publicly dismissing it"
    ],
    needs: [
      "Permission to want money without moral judgment",
      "Worthiness work that separates value from sacrifice",
      "Aligned values—defining what wealth means to YOU",
      "Practice receiving without guilt or reciprocation"
    ],
    recommendation: "The Money Magic Journal walks you through untangling worthiness from wealth. You'll explore your values, practice receiving, and build a relationship with money that feels aligned—not shameful."
  },
  e: {
    type: 'Confident Creator',
    icon: Star,
    color: '#2F5233',
    headline: "You're a Confident Creator",
    description: "Your money mindset is healthy, aligned, and actively working for you. You've done the inner work—healed the scarcity, released the control, broken the patterns, and claimed your worthiness. Money feels like a tool you can use well, not a source of stress or shame.\n\nYou make decisions from clarity rather than fear, take aligned action on opportunities, and maintain a balanced relationship with spending and saving. You're not perfect, but you're grounded. The question now is: what's next?",
    origin: "You've either had healthy money modeling from the start, or you've intentionally healed your money story through therapy, coaching, spiritual work, or personal development.",
    patterns: [
      "Making decisions from vision rather than fear",
      "Taking aligned action without overthinking",
      "Balanced relationship with spending and saving",
      "Growing wealth steadily and sustainably",
      "Able to enjoy money without guilt or anxiety"
    ],
    needs: [
      "Next-level expansion strategies",
      "Advanced wealth-building practices",
      "Support in scaling beyond your current ceiling",
      "Community of other confident creators"
    ],
    recommendation: "The Money Magic Journal offers advanced practices for expansion beyond healing. You'll explore manifestation techniques, energetic alignment, and strategies for calling in the next level of abundance."
  }
};

// ─── MAILERLITE SUBSCRIBER FUNCTION ─────────────────────────────────────────
const subscribeToMailerLite = async (emailAddress, resultType) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
      'Accept': 'application/json'
    };

    // Look up the group ID by name
    let groupId = null;
    const groupsRes = await fetch(
      `https://connect.mailerlite.com/api/groups?filter[name]=${encodeURIComponent(MAILERLITE_GROUP_NAME)}`,
      { method: 'GET', headers }
    );
    if (groupsRes.ok) {
      const groupsData = await groupsRes.json();
      const match = groupsData.data?.find(g => g.name === MAILERLITE_GROUP_NAME);
      if (match) groupId = match.id;
    }

    const body = {
      email: emailAddress,
      fields: {
        money_mindset_type: resultTypes[resultType]?.type || ''
      }
    };
    if (groupId) body.groups = [groupId];

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });
    return response.ok;
  } catch (error) {
    console.error('MailerLite subscribe error:', error);
    return false; // fail silently — still show results
  }
};
// ─────────────────────────────────────────────────────────────────────────────

const MoneyMindsetQuiz = () => {
  // stage: 'quiz' | 'email' | 'results'
  const [stage, setStage] = useState('quiz');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (value) => setSelectedOption(value);

  const handleNext = () => {
    if (!selectedOption) return;
    const newAnswers = { ...answers, [currentQuestion]: selectedOption };
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Last question answered — calculate result and go to email stage
      const counts = { a: 0, b: 0, c: 0, d: 0, e: 0 };
      Object.values(newAnswers).forEach(a => { counts[a]++; });
      const maxCount = Math.max(...Object.values(counts));
      const topResult = Object.keys(counts).find(k => counts[k] === maxCount);
      setResult(topResult);
      setStage('email');
    }
  };

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setIsSubmitting(true);
    await subscribeToMailerLite(email, result);
    setIsSubmitting(false);
    setStage('results');
  };

  const handleSkip = () => {
    setStage('results');
  };

  const shareOnTwitter = () => {
    const text = `I just discovered I'm a ${resultTypes[result].type}! Take the free Money Mindset Quiz to find yours:`;
    const url = 'https://www.edgeandaltar.com/money-mindset-quiz';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = 'https://www.edgeandaltar.com/money-mindset-quiz';
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnPinterest = () => {
    const url = 'https://www.edgeandaltar.com/money-mindset-quiz';
    const description = `I'm a ${resultTypes[result].type}! What's your money mindset type? Free quiz:`;
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(description)}`, '_blank');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const ResultIcon = result ? resultTypes[result].icon : Sparkles;

  const sharedStyles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C4 50%, #D4C4B0 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    inner: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      position: 'relative',
      zIndex: 1
    }
  };

  return (
    <div style={sharedStyles.container}>
      {/* Background blobs */}
      <div style={{ position:'absolute', top:'10%', left:'5%', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle, rgba(107,68,35,0.1) 0%, transparent 70%)', filter:'blur(60px)' }} />
      <div style={{ position:'absolute', bottom:'15%', right:'10%', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(74,93,35,0.08) 0%, transparent 70%)', filter:'blur(80px)' }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=Lora:wght@400;500;600;700&family=Manrope:wght@400;500;600&display=swap');
        @keyframes fadeInUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideIn { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
        .option-button { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .option-button:hover { transform: translateX(8px); box-shadow: 0 8px 24px rgba(107,68,35,0.15); }
        .option-button.selected { background: linear-gradient(135deg,#6B4423 0%,#8B4513 100%) !important; color: #F5E6D3 !important; border-color: #6B4423 !important; transform: translateX(8px); }
        .cta-button { transition: all 0.3s ease; }
        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(107,68,35,0.3); }
        .pattern-list li { animation: slideIn 0.4s ease-out forwards; opacity:0; }
        .pattern-list li:nth-child(1){animation-delay:0.1s} .pattern-list li:nth-child(2){animation-delay:0.2s} .pattern-list li:nth-child(3){animation-delay:0.3s} .pattern-list li:nth-child(4){animation-delay:0.4s} .pattern-list li:nth-child(5){animation-delay:0.5s}
        .email-input { outline: none; transition: border-color 0.2s, box-shadow 0.2s; }
        .email-input:focus { border-color: #6B4423 !important; box-shadow: 0 0 0 3px rgba(107,68,35,0.12); }
        .skip-link { background:none; border:none; cursor:pointer; transition: color 0.2s; }
        .skip-link:hover { color: #3D2817 !important; }
      `}</style>

      <div style={sharedStyles.inner}>

        {/* ═══════════════════════════════════════
            STAGE: QUIZ
        ═══════════════════════════════════════ */}
        {stage === 'quiz' && (
          <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <div style={{ textAlign:'center', marginBottom:'48px' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'12px', marginBottom:'24px' }}>
                <Sparkles size={28} style={{ color:'#6B4423' }} />
                <h1 style={{ fontFamily:"'Crimson Pro', serif", fontSize:'42px', fontWeight:700, color:'#3D2817', margin:0, letterSpacing:'-0.5px' }}>
                  What's Your Money Mindset Type?
                </h1>
                <Sparkles size={28} style={{ color:'#6B4423' }} />
              </div>
              <p style={{ fontFamily:"'Lora', serif", fontSize:'18px', color:'#5D4E37', maxWidth:'600px', margin:'0 auto', lineHeight:1.6 }}>
                Discover what's really driving your money decisions—and get a personalized action plan
              </p>
            </div>

            {/* Progress */}
            <div style={{ marginBottom:'40px', background:'rgba(255,255,255,0.4)', borderRadius:'12px', padding:'4px', backdropFilter:'blur(10px)' }}>
              <div style={{ height:'8px', background:'linear-gradient(90deg,#6B4423 0%,#8B4513 100%)', borderRadius:'8px', width:`${progress}%`, transition:'width 0.5s cubic-bezier(0.4,0,0.2,1)', boxShadow:'0 2px 8px rgba(107,68,35,0.3)' }} />
            </div>
            <div style={{ textAlign:'center', marginBottom:'16px' }}>
              <span style={{ fontFamily:"'Manrope', sans-serif", fontSize:'14px', fontWeight:500, color:'#6B4423', textTransform:'uppercase', letterSpacing:'1.5px' }}>
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>

            {/* Question card */}
            <div style={{ background:'rgba(255,255,255,0.7)', borderRadius:'24px', padding:'48px', marginBottom:'32px', backdropFilter:'blur(20px)', boxShadow:'0 8px 32px rgba(0,0,0,0.1)', border:'1px solid rgba(255,255,255,0.3)' }}>
              <h2 style={{ fontFamily:"'Lora', serif", fontSize:'28px', fontWeight:600, color:'#3D2817', marginBottom:'32px', lineHeight:1.4 }}>
                {questions[currentQuestion].text}
              </h2>
              <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`option-button ${selectedOption === option.value ? 'selected' : ''}`}
                    style={{ fontFamily:"'Manrope', sans-serif", fontSize:'16px', padding:'20px 24px', background:selectedOption===option.value?'linear-gradient(135deg,#6B4423 0%,#8B4513 100%)':'rgba(255,255,255,0.8)', color:selectedOption===option.value?'#F5E6D3':'#3D2817', border:selectedOption===option.value?'2px solid #6B4423':'2px solid rgba(107,68,35,0.2)', borderRadius:'12px', cursor:'pointer', textAlign:'left', boxShadow:selectedOption===option.value?'0 4px 16px rgba(107,68,35,0.25)':'0 2px 8px rgba(0,0,0,0.05)', animation:`fadeInUp 0.4s ease-out ${index*0.05}s backwards` }}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ textAlign:'center' }}>
              <button
                onClick={handleNext}
                disabled={!selectedOption}
                className="cta-button"
                style={{ fontFamily:"'Manrope', sans-serif", fontSize:'18px', fontWeight:600, padding:'18px 48px', background:selectedOption?'linear-gradient(135deg,#6B4423 0%,#8B4513 100%)':'#CCC', color:'#F5E6D3', border:'none', borderRadius:'12px', cursor:selectedOption?'pointer':'not-allowed', opacity:selectedOption?1:0.5 }}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See My Results'}
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════
            STAGE: EMAIL CAPTURE
        ═══════════════════════════════════════ */}
        {stage === 'email' && (
          <div style={{ animation:'fadeInUp 0.6s ease-out', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'60vh' }}>
            <div style={{ background:'rgba(255,255,255,0.8)', borderRadius:'24px', padding:'56px 48px', maxWidth:'560px', width:'100%', backdropFilter:'blur(20px)', boxShadow:'0 8px 32px rgba(0,0,0,0.1)', border:'1px solid rgba(255,255,255,0.3)', textAlign:'center' }}>

              <div style={{ marginBottom:'24px' }}>
                <Sparkles size={40} style={{ color:'#6B4423' }} />
              </div>

              <h2 style={{ fontFamily:"'Crimson Pro', serif", fontSize:'36px', fontWeight:700, color:'#3D2817', marginBottom:'12px', letterSpacing:'-0.3px' }}>
                Your results are ready
              </h2>
              <p style={{ fontFamily:"'Lora', serif", fontSize:'17px', color:'#5D4E37', lineHeight:1.7, marginBottom:'32px' }}>
                Enter your email to receive your personalized Money Mindset Type, what it means for your finances, and your action plan.
              </p>

              <div style={{ marginBottom:'16px' }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setEmailError(''); }}
                  onKeyDown={e => e.key === 'Enter' && handleEmailSubmit()}
                  className="email-input"
                  style={{ width:'100%', fontFamily:"'Manrope', sans-serif", fontSize:'16px', padding:'16px 20px', border:'2px solid rgba(107,68,35,0.25)', borderRadius:'12px', background:'rgba(255,255,255,0.9)', color:'#3D2817', marginBottom:'8px' }}
                />
                {emailError && (
                  <p style={{ fontFamily:"'Manrope', sans-serif", fontSize:'13px', color:'#8B0000', marginTop:'4px', textAlign:'left' }}>{emailError}</p>
                )}
              </div>

              <button
                onClick={handleEmailSubmit}
                disabled={isSubmitting}
                className="cta-button"
                style={{ width:'100%', fontFamily:"'Manrope', sans-serif", fontSize:'17px', fontWeight:600, padding:'18px', background:'linear-gradient(135deg,#6B4423 0%,#8B4513 100%)', color:'#F5E6D3', border:'none', borderRadius:'12px', cursor:isSubmitting?'wait':'pointer', marginBottom:'16px', opacity:isSubmitting?0.7:1 }}
              >
                {isSubmitting ? 'Sending…' : 'Show My Results →'}
              </button>

              <button onClick={handleSkip} className="skip-link" style={{ fontFamily:"'Manrope', sans-serif", fontSize:'13px', color:'#9B8878' }}>
                Skip — show results without email
              </button>

              <p style={{ fontFamily:"'Manrope', sans-serif", fontSize:'12px', color:'#9B8878', marginTop:'20px', lineHeight:1.6 }}>
                No spam, ever. Unsubscribe any time. By subscribing you agree to receive occasional emails from Edge & Altar.
              </p>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════
            STAGE: RESULTS
        ═══════════════════════════════════════ */}
        {stage === 'results' && result && (
          <div style={{ animation:'fadeInUp 0.6s ease-out' }}>
            {/* Result header */}
            <div style={{ textAlign:'center', marginBottom:'48px' }}>
              <div style={{ display:'inline-block', marginBottom:'24px', padding:'20px', background:`linear-gradient(135deg,${resultTypes[result].color}15 0%,${resultTypes[result].color}25 100%)`, borderRadius:'50%' }}>
                <ResultIcon size={56} style={{ color:resultTypes[result].color }} />
              </div>
              <h1 style={{ fontFamily:"'Crimson Pro', serif", fontSize:'48px', fontWeight:700, color:resultTypes[result].color, marginBottom:'16px', letterSpacing:'-0.5px' }}>
                {resultTypes[result].headline}
              </h1>
              <p style={{ fontFamily:"'Lora', serif", fontSize:'20px', color:'#5D4E37', maxWidth:'700px', margin:'0 auto', lineHeight:1.6 }}>
                Here's what that means for your money journey
              </p>
            </div>

            {/* Results body */}
            <div style={{ background:'rgba(255,255,255,0.8)', borderRadius:'24px', padding:'56px', marginBottom:'32px', backdropFilter:'blur(20px)', boxShadow:'0 8px 32px rgba(0,0,0,0.1)', border:'1px solid rgba(255,255,255,0.3)' }}>

              {[
                { title: 'What This Means', content: <div style={{ fontFamily:"'Lora',serif", fontSize:'17px', color:'#3D2817', lineHeight:1.8, whiteSpace:'pre-line' }}>{resultTypes[result].description}</div> },
                { title: 'Why You Think This Way', content: <p style={{ fontFamily:"'Lora',serif", fontSize:'17px', color:'#3D2817', lineHeight:1.8 }}>{resultTypes[result].origin}</p> },
                { title: 'How It Shows Up', content: <ul className="pattern-list" style={{ fontFamily:"'Lora',serif", fontSize:'17px', color:'#3D2817', lineHeight:1.8, paddingLeft:'24px' }}>{resultTypes[result].patterns.map((p,i)=><li key={i} style={{marginBottom:'12px'}}>{p}</li>)}</ul> },
                { title: 'What You Need', content: <ul className="pattern-list" style={{ fontFamily:"'Lora',serif", fontSize:'17px', color:'#3D2817', lineHeight:1.8, paddingLeft:'24px' }}>{resultTypes[result].needs.map((n,i)=><li key={i} style={{marginBottom:'12px'}}>{n}</li>)}</ul> }
              ].map((section, i) => (
                <div key={i} style={{ marginBottom: i < 3 ? '40px' : 0 }}>
                  <h3 style={{ fontFamily:"'Crimson Pro',serif", fontSize:'28px', fontWeight:600, color:'#3D2817', marginBottom:'20px', display:'flex', alignItems:'center', gap:'12px' }}>
                    <span style={{ width:'6px', height:'32px', background:resultTypes[result].color, borderRadius:'3px', flexShrink:0 }} />
                    {section.title}
                  </h3>
                  {section.content}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ background:`linear-gradient(135deg,${resultTypes[result].color}08 0%,${resultTypes[result].color}12 100%)`, borderRadius:'24px', padding:'48px', marginBottom:'32px', border:`2px solid ${resultTypes[result].color}30` }}>
              <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'20px' }}>
                <TrendingUp size={32} style={{ color:resultTypes[result].color }} />
                <h3 style={{ fontFamily:"'Crimson Pro',serif", fontSize:'32px', fontWeight:700, color:resultTypes[result].color, margin:0 }}>
                  Your Next Step
                </h3>
              </div>
              <p style={{ fontFamily:"'Lora',serif", fontSize:'18px', color:'#3D2817', lineHeight:1.7, marginBottom:'28px' }}>
                {resultTypes[result].recommendation}
              </p>
              {/* Primary CTA */}
              <a
                href="https://www.edgeandaltar.com/money-magic-journal"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                style={{ display:'inline-block', fontFamily:"'Manrope',sans-serif", fontSize:'18px', fontWeight:600, padding:'18px 40px', background:`linear-gradient(135deg,${resultTypes[result].color} 0%,${resultTypes[result].color}dd 100%)`, color:'#F5E6D3', borderRadius:'12px', textDecoration:'none', cursor:'pointer', boxShadow:`0 4px 16px ${resultTypes[result].color}40`, marginBottom:'12px', marginRight:'12px' }}
              >
                Get the Money Magic Journal — $27
              </a>
              {/* Secondary premium link */}
              <a
                href="https://www.edgeandaltar.com/spell-library"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display:'inline-block', fontFamily:"'Manrope',sans-serif", fontSize:'15px', color:resultTypes[result].color, textDecoration:'underline', textUnderlineOffset:'3px', padding:'18px 0', verticalAlign:'middle' }}
              >
                Included free with Premium →
              </a>
            </div>

            {/* Share */}
            <div style={{ textAlign:'center', padding:'32px', background:'rgba(255,255,255,0.6)', borderRadius:'16px', backdropFilter:'blur(10px)' }}>
              <p style={{ fontFamily:"'Manrope',sans-serif", fontSize:'16px', fontWeight:500, color:'#5D4E37', marginBottom:'20px' }}>
                Share your results:
              </p>
              <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
                {[
                  { label:'Share on Twitter', color:'#1DA1F2', fn:shareOnTwitter },
                  { label:'Share on Facebook', color:'#4267B2', fn:shareOnFacebook },
                  { label:'Share on Pinterest', color:'#E60023', fn:shareOnPinterest }
                ].map(btn => (
                  <button key={btn.label} onClick={btn.fn} className="cta-button"
                    style={{ fontFamily:"'Manrope',sans-serif", fontSize:'15px', fontWeight:500, padding:'12px 24px', background:btn.color, color:'white', border:'none', borderRadius:'8px', cursor:'pointer' }}>
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MoneyMindsetQuiz;
