import React, { useState } from 'react';
import { Moon, Sparkles, TrendingUp, Shield, RefreshCw, Heart, Star } from 'lucide-react';

// Quiz questions and options
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

// Result types configuration
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

const MoneyMindsetQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (value) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = { ...answers, [currentQuestion]: selectedOption };
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResult(newAnswers);
        setShowEmailCapture(true);
      }
    }
  };

  const calculateResult = (finalAnswers) => {
    const counts = { a: 0, b: 0, c: 0, d: 0, e: 0 };
    Object.values(finalAnswers).forEach(answer => {
      counts[answer]++;
    });

    const maxCount = Math.max(...Object.values(counts));
    const topResult = Object.keys(counts).find(key => counts[key] === maxCount);
    setResult(topResult);
  };

 const handleEmailSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Send to Make.com webhook
    const response = await fetch(8acc5mh0dqreue468hatjd2cgeujjjbu@hook.us2.make.com, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        name: name,
        result: resultTypes[result].type
      })
    });

    if (response.ok) {
      setShowEmailCapture(false);
      setShowResults(true);
    } else {
      throw new Error('Webhook failed');
    }
    
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const shareOnTwitter = () => {
    const text = `I just discovered I'm a ${resultTypes[result].type}! Take the Money Mindset Quiz to find yours:`;
    const url = 'https://edgeandaltar.com/money-mindset-quiz';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = 'https://edgeandaltar.com/money-mindset-quiz';
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnPinterest = () => {
    const url = 'https://edgeandaltar.com/money-mindset-quiz';
    const description = `I discovered I'm a ${resultTypes[result].type}! Take the Money Mindset Quiz:`;
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(description)}`, '_blank');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const ResultIcon = result ? resultTypes[result].icon : Sparkles;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C4 50%, #D4C4B0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107,68,35,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'float 20s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,93,35,0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'float 25s ease-in-out infinite reverse',
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=Lora:wght@400;500;600;700&family=Manrope:wght@400;500;600&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .option-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .option-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .option-button:hover::before {
          left: 100%;
        }
        
        .option-button:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 24px rgba(107,68,35,0.15);
        }
        
        .option-button.selected {
          background: linear-gradient(135deg, #6B4423 0%, #8B4513 100%);
          color: #F5E6D3;
          border-color: #6B4423;
          transform: translateX(8px);
        }
        
        .cta-button {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .cta-button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .cta-button:hover::after {
          width: 300px;
          height: 300px;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(107,68,35,0.3);
        }
        
        .pattern-list li {
          animation: slideIn 0.4s ease-out forwards;
          opacity: 0;
        }
        
        .pattern-list li:nth-child(1) { animation-delay: 0.1s; }
        .pattern-list li:nth-child(2) { animation-delay: 0.2s; }
        .pattern-list li:nth-child(3) { animation-delay: 0.3s; }
        .pattern-list li:nth-child(4) { animation-delay: 0.4s; }
        .pattern-list li:nth-child(5) { animation-delay: 0.5s; }
      `}</style>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        position: 'relative',
        zIndex: 1
      }}>
        {!showEmailCapture && !showResults && (
          <div style={{
            animation: 'fadeInUp 0.6s ease-out'
          }}>
            {/* Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px'
              }}>
                <Sparkles size={28} style={{ color: '#6B4423' }} />
                <h1 style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '42px',
                  fontWeight: 700,
                  color: '#3D2817',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  What's Your Money Mindset Type?
                </h1>
                <Sparkles size={28} style={{ color: '#6B4423' }} />
              </div>
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: '18px',
                color: '#5D4E37',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6
              }}>
                Discover what's really driving your money decisions—and get a personalized action plan
              </p>
            </div>

            {/* Progress bar */}
            <div style={{
              marginBottom: '40px',
              background: 'rgba(255,255,255,0.4)',
              borderRadius: '12px',
              padding: '4px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                height: '8px',
                background: 'linear-gradient(90deg, #6B4423 0%, #8B4513 100%)',
                borderRadius: '8px',
                width: `${progress}%`,
                transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 2px 8px rgba(107,68,35,0.3)'
              }} />
            </div>

            <div style={{
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                color: '#6B4423',
                textTransform: 'uppercase',
                letterSpacing: '1.5px'
              }}>
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>

            {/* Question card */}
            <div style={{
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '24px',
              padding: '48px',
              marginBottom: '32px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}>
              <h2 style={{
                fontFamily: "'Lora', serif",
                fontSize: '28px',
                fontWeight: 600,
                color: '#3D2817',
                marginBottom: '32px',
                lineHeight: 1.4
              }}>
                {questions[currentQuestion].text}
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`option-button ${selectedOption === option.value ? 'selected' : ''}`}
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '16px',
                      padding: '20px 24px',
                      background: selectedOption === option.value 
                        ? 'linear-gradient(135deg, #6B4423 0%, #8B4513 100%)'
                        : 'rgba(255,255,255,0.8)',
                      color: selectedOption === option.value ? '#F5E6D3' : '#3D2817',
                      border: selectedOption === option.value 
                        ? '2px solid #6B4423'
                        : '2px solid rgba(107,68,35,0.2)',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      boxShadow: selectedOption === option.value
                        ? '0 4px 16px rgba(107,68,35,0.25)'
                        : '0 2px 8px rgba(0,0,0,0.05)',
                      animation: `fadeInUp 0.4s ease-out ${index * 0.05}s backwards`
                    }}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Next button */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={handleNext}
                disabled={!selectedOption}
                className="cta-button"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  padding: '18px 48px',
                  background: selectedOption 
                    ? 'linear-gradient(135deg, #6B4423 0%, #8B4513 100%)'
                    : '#CCC',
                  color: '#F5E6D3',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: selectedOption ? 'pointer' : 'not-allowed',
                  boxShadow: selectedOption
                    ? '0 4px 16px rgba(107,68,35,0.3)'
                    : 'none',
                  opacity: selectedOption ? 1 : 0.5
                }}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See My Results'}
              </button>
            </div>
          </div>
        )}

        {showEmailCapture && !showResults && (
          <div style={{
            animation: 'fadeInUp 0.6s ease-out',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              borderRadius: '24px',
              padding: '56px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.3)',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'inline-block',
                marginBottom: '24px',
                padding: '16px',
                background: 'linear-gradient(135deg, rgba(107,68,35,0.1) 0%, rgba(139,69,19,0.1) 100%)',
                borderRadius: '50%'
              }}>
                <Sparkles size={48} style={{ color: '#6B4423' }} />
              </div>
              
              <h2 style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '36px',
                fontWeight: 700,
                color: '#3D2817',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}>
                Get Your Personalized Results
              </h2>
              
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: '18px',
                color: '#5D4E37',
                marginBottom: '40px',
                lineHeight: 1.6
              }}>
                Enter your email to unlock your Money Mindset Type + custom action plan
              </p>

              <form onSubmit={handleEmailSubmit}>
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    marginBottom: '16px',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '16px',
                    border: '2px solid rgba(107,68,35,0.2)',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.9)',
                    color: '#3D2817',
                    boxSizing: 'border-box'
                  }}
                />
                
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    marginBottom: '24px',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '16px',
                    border: '2px solid rgba(107,68,35,0.2)',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.9)',
                    color: '#3D2817',
                    boxSizing: 'border-box'
                  }}
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-button"
                  style={{
                    width: '100%',
                    padding: '18px',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #6B4423 0%, #8B4513 100%)',
                    color: '#F5E6D3',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    boxShadow: '0 4px 16px rgba(107,68,35,0.3)'
                  }}
                >
                  {isSubmitting ? 'Getting Your Results...' : 'Show Me My Results'}
                </button>
              </form>

              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '13px',
                color: '#8B7355',
                marginTop: '24px',
                lineHeight: 1.5
              }}>
                We respect your privacy. Unsubscribe anytime. No spam, just practical magic.
              </p>
            </div>
          </div>
        )}

        {showResults && result && (
          <div style={{
            animation: 'fadeInUp 0.6s ease-out'
          }}>
            {/* Results header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              <div style={{
                display: 'inline-block',
                marginBottom: '24px',
                padding: '20px',
                background: `linear-gradient(135deg, ${resultTypes[result].color}15 0%, ${resultTypes[result].color}25 100%)`,
                borderRadius: '50%',
                animation: 'fadeInUp 0.6s ease-out 0.2s backwards'
              }}>
                <ResultIcon size={56} style={{ color: resultTypes[result].color }} />
              </div>
              
              <h1 style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '48px',
                fontWeight: 700,
                color: resultTypes[result].color,
                marginBottom: '16px',
                letterSpacing: '-0.5px',
                animation: 'fadeInUp 0.6s ease-out 0.3s backwards'
              }}>
                {resultTypes[result].headline}
              </h1>
              
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: '20px',
                color: '#5D4E37',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.6,
                animation: 'fadeInUp 0.6s ease-out 0.4s backwards'
              }}>
                Here's what that means for your money journey
              </p>
            </div>

            {/* Results content */}
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              borderRadius: '24px',
              padding: '56px',
              marginBottom: '32px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.3)',
              animation: 'fadeInUp 0.6s ease-out 0.5s backwards'
            }}>
              {/* What this means */}
              <h3 style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '28px',
                fontWeight: 600,
                color: '#3D2817',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{
                  width: '6px',
                  height: '32px',
                  background: resultTypes[result].color,
                  borderRadius: '3px'
                }} />
                What This Means
              </h3>
              <div style={{
                fontFamily: "'Lora', serif",
                fontSize: '17px',
                color: '#3D2817',
                lineHeight: 1.8,
                marginBottom: '40px',
                whiteSpace: 'pre-line'
              }}>
                {resultTypes[result].description}
              </div>

              {/* Origin */}
              <h3 style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '28px',
                fontWeight: 600,
                color: '#3D2817',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{
                  width: '6px',
                  height: '32px',
                  background: resultTypes[result].color,
                  borderRadius: '3px'
                }} />
                Why You Think This Way
              </h3>
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: '17px',
                color: '#3D2817',
                lineHeight: 1.8,
                marginBottom: '40px'
              }}>
                {resultTypes[result].origin}
              </p>

              {/* Patterns */}
              <h3 style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '28px',
                fontWeight: 600,
                color: '#3D2817',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{
                  width: '6px',
                  height: '32px',
                  background: resultTypes[result].color,
                  borderRadius: '3px'
                }} />
                How It Shows Up
              </h3>
              <ul className="pattern-list" style={{
                fontFamily: "'Lora', serif",
                fontSize: '17px',
                color: '#3D2817',
                lineHeight: 1.8,
                marginBottom: '40px',
                paddingLeft: '24px'
              }}>
                {resultTypes[result].patterns.map((pattern, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>{pattern}</li>
                ))}
              </ul>

              {/* What you need */}
              <h3 style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '28px',
                fontWeight: 600,
                color: '#3D2817',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{
                  width: '6px',
                  height: '32px',
                  background: resultTypes[result].color,
                  borderRadius: '3px'
                }} />
                What You Need
              </h3>
              <ul className="pattern-list" style={{
                fontFamily: "'Lora', serif",
                fontSize: '17px',
                color: '#3D2817',
                lineHeight: 1.8,
                marginBottom: '0',
                paddingLeft: '24px'
              }}>
                {resultTypes[result].needs.map((need, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>{need}</li>
                ))}
              </ul>
            </div>

            {/* Product recommendation */}
            <div style={{
              background: `linear-gradient(135deg, ${resultTypes[result].color}08 0%, ${resultTypes[result].color}12 100%)`,
              borderRadius: '24px',
              padding: '48px',
              marginBottom: '32px',
              border: `2px solid ${resultTypes[result].color}30`,
              animation: 'fadeInUp 0.6s ease-out 0.6s backwards'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <TrendingUp size={32} style={{ color: resultTypes[result].color }} />
                <h3 style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '32px',
                  fontWeight: 700,
                  color: resultTypes[result].color,
                  margin: 0
                }}>
                  Your Next Step
                </h3>
              </div>
              
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: '18px',
                color: '#3D2817',
                lineHeight: 1.7,
                marginBottom: '28px'
              }}>
                {resultTypes[result].recommendation}
              </p>

              <a
                href="https://edgeandaltar.com/money-magic-journal"
                className="cta-button"
                style={{
                  display: 'inline-block',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  padding: '18px 40px',
                  background: `linear-gradient(135deg, ${resultTypes[result].color} 0%, ${resultTypes[result].color}dd 100%)`,
                  color: '#F5E6D3',
                  border: 'none',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  boxShadow: `0 4px 16px ${resultTypes[result].color}40`
                }}
              >
                Get the Money Magic Journal ($15)
              </a>
            </div>

            {/* Share buttons */}
            <div style={{
              textAlign: 'center',
              padding: '32px',
              background: 'rgba(255,255,255,0.6)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              animation: 'fadeInUp 0.6s ease-out 0.7s backwards'
            }}>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                color: '#5D4E37',
                marginBottom: '20px'
              }}>
                Share your results:
              </p>
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={shareOnTwitter}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '15px',
                    fontWeight: 500,
                    padding: '12px 24px',
                    background: '#1DA1F2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(29,161,242,0.3)',
                    transition: 'all 0.3s'
                  }}
                >
                  Share on Twitter
                </button>
                <button
                  onClick={shareOnFacebook}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '15px',
                    fontWeight: 500,
                    padding: '12px 24px',
                    background: '#4267B2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(66,103,178,0.3)',
                    transition: 'all 0.3s'
                  }}
                >
                  Share on Facebook
                </button>
                <button
                  onClick={shareOnPinterest}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '15px',
                    fontWeight: 500,
                    padding: '12px 24px',
                    background: '#E60023',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(230,0,35,0.3)',
                    transition: 'all 0.3s'
                  }}
                >
                  Share on Pinterest
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoneyMindsetQuiz;
