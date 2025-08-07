<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="hero-section relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden">
      <!-- Background elements will go here -->
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="flex flex-col items-center justify-center mb-4">
            <img src="@/assets/Deepcost_Logo.png" alt="Deepcost Logo" class="h-24 w-auto mb-4" />
            <h1 class="text-4xl md:text-5xl font-bold">
              <span class="gradient-text">DeepTrack</span>
              <span class="block text-white mt-2">Smart Project Budgeting & PO Management Platform</span>
            </h1>
          </div>
          <p class="text-xl md:text-2xl mb-8 text-gray-300">
            Take control of cost, approvals, and progress — all in one dashboard.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Introduction Block -->
    <section class="section-padding relative overflow-hidden">
      <!-- Geometric Background Elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        
        <!-- Diagonal Stripes -->
        <div class="absolute inset-0 opacity-5">
          <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]">
          </div>
        </div>
        
        <!-- Geometric Shapes -->
        <div class="absolute bottom-20 right-40 w-40 h-40 border-2 border-primary-500/10 transform -rotate-12"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header with Geometric Design -->
          <div class="text-center mb-12 relative">
            <!-- Geometric accent elements -->
            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 skew-x-12"></div>
            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 translate-x-12 w-10 h-1 bg-secondary-500 -skew-x-12"></div>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span class="gradient-text">Introducing DeepTrack</span>
              <span class="block text-white mt-2">Intelligent Project Management</span>
              <!-- Underline with geometric design -->
              <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
              <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
            </h2>
          </div>
          
          <p class="text-lg mb-8 text-gray-300 text-center">
            DeepTrack is an intelligent web application designed to help project-based companies manage:
          </p>
          
          <ul class="grid md:grid-cols-2 gap-6 mb-12">
            <li class="flex items-center p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-primary-500/30 ai-glow-primary transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mr-4">📑</span>
              <span class="text-lg text-white">Client Purchase Orders (POs)</span>
            </li>
            <li class="flex items-center p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-primary-500/30 ai-glow-primary transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mr-4">💰</span>
              <span class="text-lg text-white">Project Budgets & Cost Controls</span>
            </li>
            <li class="flex items-center p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-secondary-500/30 ai-glow-secondary transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mr-4">🧾</span>
              <span class="text-lg text-white">Purchase Requests & Multi-Level Approvals</span>
            </li>
            <li class="flex items-center p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-secondary-500/30 ai-glow-secondary transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mr-4">📈</span>
              <span class="text-lg text-white">Live Project Revenue & Status Monitoring</span>
            </li>
          </ul>
          
          <p class="text-lg text-center text-gray-300 max-w-3xl mx-auto">
            By combining workflow automation with AI-driven insights, DeepTrack helps you streamline internal processes, track project spending, and stay on top of financial targets — in real time.
          </p>
          
          <!-- Spacer -->
          <div class="mt-8"></div>
          
        </div>
      </div>
    </section>

    <!-- Key Benefits Section -->
    <section class="features-section section-padding relative overflow-hidden">
      <!-- Geometric Background Elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        
        <!-- Diagonal Stripes -->
        <div class="absolute inset-0 opacity-5">
          <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]">
          </div>
        </div>
        
        <!-- Geometric Shapes -->
        <div class="absolute top-20 left-20 w-40 h-40 border-2 border-primary-500/10 transform rotate-45"></div>
        <div class="absolute bottom-40 right-20 w-64 h-64 border-2 border-secondary-500/10 transform -rotate-12"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header with Geometric Design -->
          <div class="text-center mb-16 relative">
            <!-- Geometric accent elements -->
            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 skew-x-12"></div>
            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 translate-x-12 w-10 h-1 bg-secondary-500 -skew-x-12"></div>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span class="gradient-text">Key Benefits</span>
              <span class="block text-white mt-2">Why Teams Choose DeepTrack</span>
              <!-- Underline with geometric design -->
              <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
              <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
            </h2>
          </div>
          
          <!-- Benefits Grid with Geometric Design -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- AI-Powered Workflow Automation -->
            <div class="relative bg-dark-800/50 backdrop-blur-sm p-6 transition-all duration-300 overflow-hidden ai-glow-primary"
                 style="clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)">
              
              <!-- AI Glow Effect -->
              <div class="absolute inset-0 z-0 ai-glow-radial-primary"></div>
              
              <!-- Geometric Accents -->
              <div class="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 z-10 border-primary-500/30"></div>
              <div class="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 z-10 border-primary-500/30"></div>
              
              <!-- Icon with geometric background -->
              <div class="w-14 h-14 mb-6 flex items-center justify-center transform rotate-45 relative">
                <div class="absolute inset-0 bg-primary-900/50 text-primary-400"></div>
                <div class="transform -rotate-45 relative z-10 text-3xl">🧠</div>
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-3">AI-Powered Workflow Automation</h3>
              <p class="text-gray-400">Automate the entire lifecycle — from PO creation to budget consumption — and get smart alerts when thresholds are reached.</p>
            </div>
            
            <!-- Budget-Linked Purchase Requests -->
            <div class="relative bg-dark-800/50 backdrop-blur-sm p-6 transition-all duration-300 overflow-hidden ai-glow-secondary"
                 style="clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)">
              
              <!-- AI Glow Effect -->
              <div class="absolute inset-0 z-0 ai-glow-radial-secondary"></div>
              
              <!-- Geometric Accents -->
              <div class="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 z-10 border-secondary-500/30"></div>
              <div class="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 z-10 border-secondary-500/30"></div>
              
              <!-- Icon with geometric background -->
              <div class="w-14 h-14 mb-6 flex items-center justify-center transform rotate-45 relative">
                <div class="absolute inset-0 bg-secondary-900/50 text-secondary-400"></div>
                <div class="transform -rotate-45 relative z-10 text-3xl">💸</div>
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-3">Budget-Linked Purchase Requests</h3>
              <p class="text-gray-400">Ensure every request is tied to a project budget, preventing overruns and enhancing accountability.</p>
            </div>
            
            <!-- Approval Flow Management -->
            <div class="relative bg-dark-800/50 backdrop-blur-sm p-6 transition-all duration-300 overflow-hidden ai-glow-primary"
                 style="clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)">
              
              <!-- AI Glow Effect -->
              <div class="absolute inset-0 z-0 ai-glow-radial-primary"></div>
              
              <!-- Geometric Accents -->
              <div class="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 z-10 border-primary-500/30"></div>
              <div class="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 z-10 border-primary-500/30"></div>
              
              <!-- Icon with geometric background -->
              <div class="w-14 h-14 mb-6 flex items-center justify-center transform rotate-45 relative">
                <div class="absolute inset-0 bg-primary-900/50 text-primary-400"></div>
                <div class="transform -rotate-45 relative z-10 text-3xl">🔁</div>
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-3">Approval Flow Management</h3>
              <p class="text-gray-400">Customizable multi-level approvals for PRs, budgets, and claims — aligned with your internal policies.</p>
            </div>
            
            <!-- Project Dashboard with Real-Time Insights -->
            <div class="relative bg-dark-800/50 backdrop-blur-sm p-6 transition-all duration-300 overflow-hidden ai-glow-secondary"
                 style="clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)">
              
              <!-- AI Glow Effect -->
              <div class="absolute inset-0 z-0 ai-glow-radial-secondary"></div>
              
              <!-- Geometric Accents -->
              <div class="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 z-10 border-secondary-500/30"></div>
              <div class="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 z-10 border-secondary-500/30"></div>
              
              <!-- Icon with geometric background -->
              <div class="w-14 h-14 mb-6 flex items-center justify-center transform rotate-45 relative">
                <div class="absolute inset-0 bg-secondary-900/50 text-secondary-400"></div>
                <div class="transform -rotate-45 relative z-10 text-3xl">📊</div>
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-3">Project Dashboard with Real-Time Insights</h3>
              <p class="text-gray-400">Track live status, revenue recognition, cost balance, and performance across all active projects.</p>
            </div>
            
            <!-- Centralized Data for Auditing & Analysis -->
            <div class="relative bg-dark-800/50 backdrop-blur-sm p-6 transition-all duration-300 overflow-hidden ai-glow-primary"
                 style="clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)">
              
              <!-- AI Glow Effect -->
              <div class="absolute inset-0 z-0 ai-glow-radial-primary"></div>
              
              <!-- Geometric Accents -->
              <div class="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 z-10 border-primary-500/30"></div>
              <div class="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 z-10 border-primary-500/30"></div>
              
              <!-- Icon with geometric background -->
              <div class="w-14 h-14 mb-6 flex items-center justify-center transform rotate-45 relative">
                <div class="absolute inset-0 bg-primary-900/50 text-primary-400"></div>
                <div class="transform -rotate-45 relative z-10 text-3xl">📁</div>
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-3">Centralized Data for Auditing & Analysis</h3>
              <p class="text-gray-400">Every action is logged and categorized, making audits, reporting, and variance tracking seamless.</p>
            </div>
            
            <!-- Monthly Reports & Forecasting -->
            <div class="relative bg-dark-800/50 backdrop-blur-sm p-6 transition-all duration-300 overflow-hidden ai-glow-secondary"
                 style="clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)">
              
              <!-- AI Glow Effect -->
              <div class="absolute inset-0 z-0 ai-glow-radial-secondary"></div>
              
              <!-- Geometric Accents -->
              <div class="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 z-10 border-secondary-500/30"></div>
              <div class="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 z-10 border-secondary-500/30"></div>
              
              <!-- Icon with geometric background -->
              <div class="w-14 h-14 mb-6 flex items-center justify-center transform rotate-45 relative">
                <div class="absolute inset-0 bg-secondary-900/50 text-secondary-400"></div>
                <div class="transform -rotate-45 relative z-10 text-3xl">📅</div>
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-3">Monthly Reports & Forecasting</h3>
              <p class="text-gray-400">Generate periodical project revenue reports, budget usage summaries, and cost forecasts in one click.</p>
            </div>
            
            <!-- Enterprise-Grade Security -->
            <div class="relative bg-dark-800/50 backdrop-blur-sm p-6 transition-all duration-300 overflow-hidden ai-glow-primary"
                 style="clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)">
              
              <!-- AI Glow Effect -->
              <div class="absolute inset-0 z-0 ai-glow-radial-primary"></div>
              
              <!-- Geometric Accents -->
              <div class="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 z-10 border-primary-500/30"></div>
              <div class="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 z-10 border-primary-500/30"></div>
              
              <!-- Icon with geometric background -->
              <div class="w-14 h-14 mb-6 flex items-center justify-center transform rotate-45 relative">
                <div class="absolute inset-0 bg-primary-900/50 text-primary-400"></div>
                <div class="transform -rotate-45 relative z-10 text-3xl">🔒</div>
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-3">Enterprise-Grade Security</h3>
              <p class="text-gray-400">Advanced encryption, role-based access controls, and comprehensive audit logs ensure your sensitive financial data remains protected.</p>
            </div>
            
            <!-- Accessible Anywhere, Anytime -->
            <div class="relative bg-dark-800/50 backdrop-blur-sm p-6 transition-all duration-300 overflow-hidden ai-glow-secondary"
                 style="clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)">
              
              <!-- AI Glow Effect -->
              <div class="absolute inset-0 z-0 ai-glow-radial-secondary"></div>
              
              <!-- Geometric Accents -->
              <div class="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 z-10 border-secondary-500/30"></div>
              <div class="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 z-10 border-secondary-500/30"></div>
              
              <!-- Icon with geometric background -->
              <div class="w-14 h-14 mb-6 flex items-center justify-center transform rotate-45 relative">
                <div class="absolute inset-0 bg-secondary-900/50 text-secondary-400"></div>
                <div class="transform -rotate-45 relative z-10 text-3xl">🌐</div>
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-3">Accessible Anywhere, Anytime</h3>
              <p class="text-gray-400">Built as a cloud platform, DeepTrack ensures your team can work and monitor from the office, site, or remotely.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual & Layout Suggestions Section -->
    <section class="section-padding relative overflow-hidden">
      <!-- Geometric Background Elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        
        <!-- Diagonal Stripes -->
        <div class="absolute inset-0 opacity-5">
          <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]">
          </div>
        </div>
        
        <!-- Geometric Shapes -->
        <div class="absolute top-40 left-20 w-40 h-40 border-2 border-primary-500/10 transform rotate-12"></div>
        <div class="absolute bottom-20 right-40 w-64 h-64 border-2 border-secondary-500/10 transform -rotate-12"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header with Geometric Design -->
          <div class="text-center mb-12 relative">
            <!-- Geometric accent elements -->
            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 skew-x-12"></div>
            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 translate-x-12 w-10 h-1 bg-secondary-500 -skew-x-12"></div>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span class="gradient-text">Key Features</span>
              <span class="block text-white mt-2">Everything You Need in One Platform</span>
              <!-- Underline with geometric design -->
              <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
              <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
            </h2>
          </div>
          
          <!-- Highlight Cards Grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            <!-- Budget Control -->
            <div class="p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-primary-500/30 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mb-3">✅</span>
              <h3 class="text-lg font-bold">Budget Control</h3>
            </div>
            
            <!-- Approval Workflow -->
            <div class="p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-secondary-500/30 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mb-3">🔄</span>
              <h3 class="text-lg font-bold">Approval Workflow</h3>
            </div>
            
            <!-- Project Tracker -->
            <div class="p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-primary-500/30 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mb-3">🏗</span>
              <h3 class="text-lg font-bold">Project Tracker</h3>
            </div>
            
            <!-- Cost Management -->
            <div class="p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-secondary-500/30 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mb-3">📉</span>
              <h3 class="text-lg font-bold">Cost Management</h3>
            </div>
            
            <!-- Smart Alerts -->
            <div class="p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-primary-500/30 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mb-3">🔔</span>
              <h3 class="text-lg font-bold">Smart Alerts</h3>
            </div>
            
            <!-- Procurement Tracker -->
            <div class="p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-secondary-500/30 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <span class="text-4xl mb-3">📦</span>
              <h3 class="text-lg font-bold">Procurement Tracker</h3>
            </div>
          </div>
          
          <!-- Stats Section -->
          <div class="bg-dark-800/50 backdrop-blur-sm p-8 rounded-lg border-t-2 border-l-2 border-gradient-to-r from-primary-500/30 to-secondary-500/30">
            <h3 class="text-2xl font-bold text-center mb-8">Real Results, Real Impact</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Stat 1 -->
              <div class="text-center">
                <div class="text-4xl font-bold gradient-text mb-2">30%</div>
                <div class="flex items-center justify-center">
                  <span class="text-3xl mr-2">📉</span>
                  <p class="text-gray-300">reduction in budget overruns</p>
                </div>
              </div>
              
              <!-- Stat 2 -->
              <div class="text-center">
                <div class="text-4xl font-bold gradient-text mb-2">60%</div>
                <div class="flex items-center justify-center">
                  <span class="text-3xl mr-2">⏱️</span>
                  <p class="text-gray-300">faster purchase approval turnaround</p>
                </div>
              </div>
              
              <!-- Stat 3 -->
              <div class="text-center">
                <div class="text-4xl font-bold gradient-text mb-2">100%</div>
                <div class="flex items-center justify-center">
                  <span class="text-3xl mr-2">🧾</span>
                  <p class="text-gray-300">visibility across all client POs and projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance Section -->
    <section class="compliance-section section-padding relative overflow-hidden">
      <!-- Geometric Background Elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        
        <!-- Diagonal Stripes -->
        <div class="absolute inset-0 opacity-5">
          <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]">
          </div>
        </div>
        
        <!-- Geometric Shapes -->
        <div class="absolute top-20 left-20 w-40 h-40 border-2 border-primary-500/10 transform rotate-45"></div>
        <div class="absolute bottom-40 right-20 w-64 h-64 border-2 border-secondary-500/10 transform -rotate-12"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header with Geometric Design -->
        <div class="text-center mb-16 relative">
          <!-- Geometric accent elements -->
          <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 skew-x-12"></div>
          <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 translate-x-12 w-10 h-1 bg-secondary-500 -skew-x-12"></div>
          
          <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span class="gradient-text">🇸🇬 Singapore</span>
            <span class="block text-white mt-2">Regulatory Compliance</span>
            <!-- Underline with geometric design -->
            <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
            <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
          </h2>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <p class="text-lg text-center text-gray-300 mb-10">
            DeepTrack is fully compliant with Singapore's leading regulatory authorities, ensuring your project management and financial tracking meet the highest industry standards.
          </p>
          
          <!-- Compliance Badges Grid -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            <!-- BCA Badge -->
            <div class="flex flex-col items-center p-4 bg-dark-800/70 backdrop-blur-sm rounded-lg border border-primary-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <!-- Glow effect on hover -->
              <div class="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="w-16 h-16 flex items-center justify-center mb-3 bg-primary-900/30 rounded-full">
                <span class="text-2xl">🏢</span>
              </div>
              <h4 class="text-white font-semibold mb-1">BCA</h4>
              <p class="text-xs text-gray-400 text-center">Building & Construction Authority</p>
            </div>
            
            <!-- IMDA Badge -->
            <div class="flex flex-col items-center p-4 bg-dark-800/70 backdrop-blur-sm rounded-lg border border-secondary-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <!-- Glow effect on hover -->
              <div class="absolute inset-0 bg-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="w-16 h-16 flex items-center justify-center mb-3 bg-secondary-900/30 rounded-full">
                <span class="text-2xl">💻</span>
              </div>
              <h4 class="text-white font-semibold mb-1">IMDA</h4>
              <p class="text-xs text-gray-400 text-center">Infocomm Media Development Authority</p>
            </div>
            
            <!-- LTA Badge -->
            <div class="flex flex-col items-center p-4 bg-dark-800/70 backdrop-blur-sm rounded-lg border border-primary-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <!-- Glow effect on hover -->
              <div class="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="w-16 h-16 flex items-center justify-center mb-3 bg-primary-900/30 rounded-full">
                <span class="text-2xl">🚆</span>
              </div>
              <h4 class="text-white font-semibold mb-1">LTA</h4>
              <p class="text-xs text-gray-400 text-center">Land Transport Authority</p>
            </div>
            
            <!-- PUB Badge -->
            <div class="flex flex-col items-center p-4 bg-dark-800/70 backdrop-blur-sm rounded-lg border border-secondary-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <!-- Glow effect on hover -->
              <div class="absolute inset-0 bg-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="w-16 h-16 flex items-center justify-center mb-3 bg-secondary-900/30 rounded-full">
                <span class="text-2xl">💧</span>
              </div>
              <h4 class="text-white font-semibold mb-1">PUB</h4>
              <p class="text-xs text-gray-400 text-center">Public Utilities Board</p>
            </div>
            
            <!-- SCDF Badge -->
            <div class="flex flex-col items-center p-4 bg-dark-800/70 backdrop-blur-sm rounded-lg border border-primary-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <!-- Glow effect on hover -->
              <div class="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="w-16 h-16 flex items-center justify-center mb-3 bg-primary-900/30 rounded-full">
                <span class="text-2xl">🔥</span>
              </div>
              <h4 class="text-white font-semibold mb-1">SCDF</h4>
              <p class="text-xs text-gray-400 text-center">Singapore Civil Defence Force</p>
            </div>
          </div>
          
          <div class="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-primary-500/20 max-w-3xl mx-auto">
            <p class="text-sm text-center text-gray-300">
              Our compliance with these regulatory bodies ensures that your project management and financial tracking adhere to the latest standards and regulations in Singapore's construction and technology sectors, providing you with peace of mind and regulatory certainty.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section section-padding relative overflow-hidden">
      <!-- Gradient Background -->
      <div class="absolute inset-0 z-0 bg-gradient-to-br from-dark-900 via-primary-900/50 to-secondary-900/50"></div>
      
      <!-- Geometric Patterns -->
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_10px)]"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <!-- Glass Panel -->
          <div class="glass-panel bg-dark-800/40 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/10 shadow-xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <!-- Left Column: Text and CTA -->
              <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                  <span class="gradient-text">Ready to gain full visibility</span>
                  <span class="block text-white mt-2">and control over your project finances?</span>
                </h2>
                
                <ul class="mb-8 space-y-3">
                  <li v-for="(benefit, index) in benefits" :key="index" class="flex items-start">
                    <span class="text-secondary-500 mr-3">✓</span>
                    <span class="text-gray-300">{{ benefit }}</span>
                  </li>
                </ul>
                
                <div class="flex flex-wrap gap-4">
                  <button class="btn-primary">🚀 Try DeepTrack today</button>
                  <button class="btn-secondary">📞 Book a demo</button>
                  <button class="btn-outline">📥 Request feature walkthrough</button>
                </div>
              </div>
              
              <!-- Right Column: Contact Form -->
              <div>
                <form @submit.prevent="submitForm" class="space-y-4">
                  <div>
                    <label for="name" class="block text-gray-300 text-sm mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="form.name" 
                      class="w-full px-4 py-2 rounded-lg bg-dark-700/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="email" class="block text-gray-300 text-sm mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="form.email" 
                      class="w-full px-4 py-2 rounded-lg bg-dark-700/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="company" class="block text-gray-300 text-sm mb-1">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      v-model="form.company" 
                      class="w-full px-4 py-2 rounded-lg bg-dark-700/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    class="w-full btn-primary flex items-center justify-center relative overflow-hidden"
                    :disabled="isSubmitting"
                  >
                    <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isSubmitting ? 'Submitting...' : 'Request Demo' }}
                  </button>
                  
                  <p class="text-xs text-gray-400 text-center mt-4">
                    By submitting this form, you agree to our 
                    <a href="#" class="text-primary-400 hover:underline">Privacy Policy</a> 
                    and <a href="#" class="text-primary-400 hover:underline">Terms of Service</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Form data
const form = ref({
  name: '',
  email: '',
  company: '',
  interest: ''
});

// Form submission state
const isSubmitting = ref(false);

// Benefits list for CTA section
const benefits = [
  'Streamline project financial management',
  'Prevent budget overruns with real-time tracking',
  'Accelerate purchase request approvals',
  'Generate comprehensive financial reports',
  'Gain full visibility across all projects'
];

// Form submission handler
const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    console.log('Form submitted:', form.value);
    form.value = { name: '', email: '', company: '', interest: '' };
    isSubmitting.value = false;
    alert('Thank you for your interest in DeepTrack! We will contact you shortly.');
  }, 1500);
};
</script>
