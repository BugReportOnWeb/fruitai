import { useEffect, useState } from "react";
import FAQForm from "../components/FAQForm";
import FAQCard from "../components/FAQCard";

const FAQPage = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const deleteFaq = async (faqId) => {
        try {
            const res = await fetch(`http://127.0.0.1:3000/api/faqs/${faqId}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                setFaqs(prevFaqs => {
                    return prevFaqs.filter(faq => faq.id != faqId)
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchFAQs = async () => {
            setLoading(true);
            setError('');

            try {
                const res = await fetch('http://127.0.0.1:3000/api/faqs');
                const data = await res.json();

                if (!res.ok) {
                    setError(data.error);
                }

                if (res.ok) {
                    setFaqs(data);
                    setError('');
                }
            } catch (error) {
                console.error(error.message);
                setError('Some Error occured :(');
            } finally {
                setLoading(false);
            }
        }

        fetchFAQs()
    }, [])

    return (
        <div className="relative">
            <div className={`flex flex-col gap-7 ${showPopup ? 'blur-sm' : 'blur-none'}`}>
                <div className="flex gap-5 items-center mt-3 justify-center">
                    <h1 className="font-bold text-3xl text-center">FAQ Section</h1>
                    <button className='border border-gray-800 rounded-3xl p-1' onClick={() => setShowPopup(true)}>➕</button>
                </div>

                {error && <p className="text-center font-bold">{error}</p>}
                {loading && <p className="text-center font-bold">Loading...</p>}

                {!error && !loading && (
                    <div className="flex flex-col gap-3">
                        {faqs.map(faq => (
                            <FAQCard faq={faq} key={faq.id} deleteFaq={deleteFaq} />
                        ))}
                    </div>
                )}
            </div>

            {showPopup && <FAQForm setFaqs={setFaqs} setShowPopup={setShowPopup} />}
        </div>
    )
}

export default FAQPage;
