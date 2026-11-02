import InfoPage from "../components/InfoPage";
export const metadata={title:"Contact NotaryFee | Feedback and Corrections",description:"Send corrections, report outdated notary fee information, or suggest improvements to NotaryFee."};
export default function Page(){return <InfoPage eyebrow="Contact" title="Help us make NotaryFee more useful" description="We welcome corrections, source suggestions and feedback about the calculator and educational guides.">
<h2>Report an issue</h2><p>If you find a broken link, an unclear explanation, a calculator bug or a state rule that needs review, open an issue in the <a href="https://github.com/zeeuskhan/notaryfee/issues" target="_blank" rel="noreferrer">NotaryFee GitHub repository</a>.</p>
<h2>Suggest an official source</h2><p>For state fee corrections, please include the state, the relevant statute or official government page, the date you checked it and the exact section that supports the correction. This helps us review changes responsibly.</p>
<h2>Important</h2><p>Do not submit private client documents, identity details, financial account information or other sensitive personal information through public issue reports.</p>
</InfoPage>}