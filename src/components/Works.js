import React, { useState } from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import { BlogData, ProjectData } from "../data/WorkData";
import WorkCard from "./WorkCard";

const Works = () => {
	const [activeTab, setActiveTab] = useState("Projects");

	const fade = {
		opacity: 1,
		transition: { duration: 1.4 },
	};

	const tabData = [
		{ id: "Projects", label: "Projects", data: ProjectData },
		{ id: "Blog", label: "Blog", data: BlogData },
	];

	return (
		<div className="works" id="works">
			<div className="container">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={fade}
					viewport={{ once: true }}
					className="heading"
				>
					<p className="heading-sub-text">I build real value</p>
					<p className="heading-text">Works</p>
				</motion.div>

				<div className="tabs">
					{tabData.map((tab) => (
						<button
							key={tab.id}
							className={`tab ${activeTab === tab.id ? "active" : ""}`}
							onClick={() => setActiveTab(tab.id)}
							aria-pressed={activeTab === tab.id} // ✅ Fixed warning
						>
							{tab.label}
						</button>
					))}
				</div>

				<motion.div className="works-box" initial={{ opacity: 0 }} whileInView={fade}>
					{tabData.map((tab) =>
						activeTab === tab.id ? (
							<React.Fragment key={tab.id}>
								{tab.data.length > 0 ? (
									tab.data.map((w, index) => <WorkCard w={w} tabId={tab.id} key={index} />)
								) : (
									<p className="no-data">No {tab.label} available</p>
								)}
							</React.Fragment>
						) : null
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default Works;
