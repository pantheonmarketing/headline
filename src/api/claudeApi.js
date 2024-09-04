import axios from 'axios';

const GPT_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

export const fetchHeadlines = async (inputData) => {
  const apiEndpoint = GPT_API_ENDPOINT;
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  console.log('Environment Variables:');
  console.log('REACT_APP_OPENAI_API_KEY:', process.env.REACT_APP_OPENAI_API_KEY);

  const prompt = `You're an expert landing page copywriter, specializing in creating pre-headlines, headlines, and subheadlines that deeply resonate with the target audience and drive conversions. Generate 5 sets of pre-headlines, headlines, and subheadlines for a landing page based on the following information:

Target audience: ${inputData.targetAudience}
Desired outcome: ${inputData.desiredOutcome}
Pain points or things they don't like: ${inputData.painPoints}
Your unique solution: ${inputData.uniqueSolution}
Current month: ${inputData.currentMonth}

Follow these guidelines:
1. Pre-headline: Call out the audience and add a pain point or desire.
2. Headline: Use attention-grabbing words like "discover" or "revealed". Include steps (e.g., 3 secrets, 5 keys) and make the outcome sound easy or comfortable. End with "This ${inputData.currentMonth}, ${new Date().getFullYear()}".
3. Subheadline: Start with "Without" and address a pain point. Use the format "(Without X & Even If Y)".

Example format:
1. Pre-headline: [Pre-headline text]
   Headline: [Headline text]
   Subheadline: [Subheadline text]

2. Pre-headline: [Pre-headline text]
   Headline: [Headline text]
   Subheadline: [Subheadline text]

... (repeat for all 5 sets)

Ensure the copy resonates emotionally with the audience and addresses their specific situation.`;

  const makeRequest = async (retryCount = 0) => {
    try {
      console.log('Sending request to API...');
      console.log('API Endpoint:', apiEndpoint);
      console.log('API Key:', apiKey);
      console.log('Prompt:', prompt);

      const response = await axios.post(
        apiEndpoint,
        {
          model: "gpt-4",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 1000
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
        }
      );

      console.log('Response received:', response.data);
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching headlines:', error.response ? error.response.data : error.message);
      console.error('Error details:', error);

      if (error.response && error.response.status === 401 && retryCount < 3) {
        console.log(`Retrying request... (${retryCount + 1})`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
        return makeRequest(retryCount + 1);
      }

      throw error;
    }
  };

  return makeRequest();
};
