import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnalysisSectionProps {
  icon: string;
  title: string;
  children: ReactNode;
  delay?: number;
}

export function AnalysisSection({ icon, title, children, delay = 0 }: AnalysisSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="space-y-3"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <div className="pl-8 text-foreground/90 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
