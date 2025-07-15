
import React from 'react';
import { Activity, BarChart, Database, Globe, Layers, Shield, Zap, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoIconProps = {
  productId: string;
  className?: string;
  darkBackground?: boolean;
};

export const LogoIcon = ({ productId, className, darkBackground = false }: LogoIconProps) => {
  const iconClass = "w-12 h-12 stroke-2";
  const wrapperClass = cn(
    "flex items-center justify-center p-4 rounded-full",
    darkBackground ? "bg-white/10 backdrop-blur-sm ring-1 ring-white/20" : "bg-white ring-1 ring-gray-200",
    "shadow-lg transition-all duration-300",
    className
  );

  const getIcon = () => {
    switch (productId) {
      case 'dar-zarrouk':
        return <Activity className={cn(iconClass, "text-red-500")} />;
      case 'soilclassx':
        return <Layers className={cn(iconClass, "text-red-600")} />;
      case 'vesclassify':
        return <BarChart className={cn(iconClass, "text-red-400")} />;
      case 'cpt-analyser':
        return <Database className={cn(iconClass, "text-red-500")} />;
      case 'pilecapacity':
        return <Shield className={cn(iconClass, "text-red-600")} />;
      case 'aquifer-calc':
        return <Globe className={cn(iconClass, "text-red-400")} />;
      case 'outcrop-logger':
        return <Zap className={cn(iconClass, "text-red-500")} />;
      case 'soilcloud':
        return <Cloud className={cn(iconClass, "text-blue-500")} />;
      default:
        return <Activity className={cn(iconClass, "text-red-500")} />;
    }
  };

  return (
    <div className={wrapperClass}>
      {getIcon()}
    </div>
  );
};
