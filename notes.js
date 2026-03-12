/* notes.js — Comprehensive UPSC ISS Revision Notes */
const REVISION_NOTES = {
    "paper1": {
        "prob": {
            "title": "Probability & Statistical Methods",
            "sections": [
                {
                    "id": "foundations",
                    "label": "Probability Foundations",
                    "content": "### Axiomatic & Classical Definitions\n- **Axioms:** \\( P(A) \\ge 0 \\), \\( P(S) = 1 \\), and for disjoint \\( A_i \\), \\( P(\\cup A_i) = \\sum P(A_i) \\).\n- **Bayes' Theorem:** Posterior calculation \\( P(B_k|A) = \\frac{P(A|B_k)P(B_k)}{\\sum P(A|B_i)P(B_i)} \\).\n\n### Random Variables & Moments\n- **Moments:** \n  - Raw: \\( \\mu'_r = E(X^r) \\). Central: \\( \\mu_r = E(X-\\mu)^r \\).\n  - Relation: \\( \\mu_2 = \\mu'_2 - (\\mu'_1)^2 \\), \\( \\mu_3 = \\mu'_3 - 3\\mu'_2\\mu'_1 + 2(\\mu'_1)^3 \\).\n- **Expectation:** \\( E(X) = E[E(X|Y)] \\). \\( Var(X) = E[Var(X|Y)] + Var[E(X|Y)] \\).\n\n`ISS Trick:` If \\( X, Y \\) are i.i.d. \\( N(0, 1) \\), then \\( X+Y \\) and \\( X-Y \\) are independent (Basu's Theorem context)."
                },
                {
                    "id": "discrete-dist",
                    "label": "Standard Discrete Distributions",
                    "content": "### Key Discrete Models\n- **Bernoulli(p)**: \\( P(X=x)=p^x q^{1-x} \\)\n  - **Gen. Functions**: PGF: \\( q+ps \\), MGF: \\( q+pe^t \\), CF: \\( q+pe^{it} \\)\n  - **Shape/Median**: \\( \\gamma_1 = \\frac{1-2p}{\\sqrt{pq}} \\), \\( \\beta_2 = \\frac{1-6pq}{pq} \\), Median: 0 (if \\( p<0.5 \\)) or 1 (if \\( p>0.5 \\)).\n- **Binomial(n,p)**: \\( \\binom{n}{x}p^x q^{n-x} \\)\n  - **Gen. Functions**: PGF: \\( (q+ps)^n \\), MGF: \\( (q+pe^t)^n \\), Cumulants: \\( \\kappa_r = n \\kappa_{r,Bern} \\).\n  - **Shape/Median**: \\( \\gamma_1 = \\frac{q-p}{\\sqrt{npq}} \\), \\( \\beta_2 = 3 + \\frac{1-6pq}{npq} \\), Median: \\( \\approx np \\).\n- **Poisson(\\(\\lambda\\))**: \\( \\frac{e^{-\\lambda}\\lambda^x}{x!} \\)\n  - **Gen. Functions**: PGF: \\( e^{\\lambda(s-1)} \\), MGF: \\( e^{\\lambda(e^t-1)} \\), Cumulants: \\( \\kappa_r = \\lambda \\) for all \\( r \\).\n  - **Shape/Median**: \\( \\gamma_1 = 1/\\sqrt{\\lambda} \\), \\( \\beta_2 = 3 + 1/\\lambda \\), Median: \\( \\lfloor \\lambda + \\lambda/3 - 0.02 \\rfloor \\).\n- **Geometric(p)**: \\( q^x p \\) (for \\( x \\ge 0 \\))\n  - **Gen. Functions**: PGF: \\( p(1-qs)^{-1} \\), MGF: \\( p(1-qe^t)^{-1} \\).\n  - **Shape/Median**: \\( \\gamma_1 = \\frac{1+q}{\\sqrt{q}} \\), \\( \\beta_2 = 3 + \\frac{p^2+6q}{q} \\), Median: \\( \\lceil -\\frac{\\log 2}{\\log q} \\rceil \\).\n- **Negative Binomial(r,p)**: \\( \\binom{x+r-1}{x}p^r q^x \\)\n  - **Gen. Functions**: PGF: \\( (p/(1-qs))^r \\), MGF: \\( (p/(1-qe^t))^r \\), Cumulants: \\( \\kappa_r = r \\kappa_{r,Geo} \\).\n  - **Shape/Median**: \\( \\gamma_1 = \\frac{1+q}{\\sqrt{rq}} \\), \\( \\beta_2 = 3 + \\frac{p^2+6q}{rq} \\).\n- **Hypergeometric(N,M,n)**: \\( E(X)=nM/N \\), \\( Var(X)=n\\frac{M}{N}\\frac{N-M}{N}\\frac{N-n}{N-1} \\).\n- **Multinomial**: MGF: \\( (p_1 e^{t_1} + ... + p_k e^{t_k})^n \\)."
                },
                {
                    "id": "continuous-dist",
                    "label": "Standard Continuous Distributions",
                    "content": "### Key Continuous Models\n- **Uniform/Rectangular(a,b)**: \\( f(x) = 1/(b-a) \\)\n  - **Gen. Functions**: MGF: \\( \\frac{e^{tb}-e^{ta}}{t(b-a)} \\).\n  - **Properties**: Median: \\( (a+b)/2 \\), \\( \\gamma_1 = 0 \\), \\( \\beta_2 = 1.8 \\).\n- **Exponential(\\(\\theta\\))**: \\( \\theta e^{-\\theta x} \\)\n  - **Gen. Functions**: MGF: \\( (1-t/\\theta)^{-1} \\).\n  - **Properties**: Median: \\( \\frac{\\ln 2}{\\theta} \\), \\( \\gamma_1 = 2 \\), \\( \\beta_2 = 9 \\).\n- **Normal(\\(\\mu, \\sigma^2\\))**:\n  - **Gen. Functions**: MGF: \\( e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2} \\), CF: \\( e^{i\\mu t - \\frac{1}{2}\\sigma^2 t^2} \\).\n  - **Cumulants**: \\( \\kappa_1 = \\mu, \\kappa_2 = \\sigma^2, \\kappa_{r>2} = 0 \\).\n  - **Properties**: Median: \\( \\mu \\), \\( \\gamma_1 = 0 \\), \\( \\beta_2 = 3 \\).\n- **Cauchy**: \\( \\frac{1}{\\pi[1+(x-\\mu)^2]} \\)\n  - **Gen. Functions**: CF: \\( e^{i\\mu t - |t|} \\), MGF does not exist.\n  - **Properties**: Median: \\( \\mu \\), Moments do not exist.\n- **Laplace(\\(\\mu, b\\))**: \\( \\frac{1}{2b} e^{-|x-\\mu|/b} \\)\n  - **Gen. Functions**: MGF: \\( \\frac{e^{\\mu t}}{1-b^2 t^2} \\).\n  - **Properties**: Median: \\( \\mu \\), \\( \\gamma_1 = 0 \\), \\( \\beta_2 = 6 \\).\n- **Gamma(\\(\\alpha, \\lambda\\))**: \\( \\frac{\\lambda^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\lambda x} \\)\n  - **Gen. Functions**: MGF: \\( (1-t/\\lambda)^{-\\alpha} \\).\n  - **Properties**: \\( \\gamma_1 = 2/\\sqrt{\\alpha} \\), \\( \\beta_2 = 3 + 6/\\alpha \\).\n- **Beta Type I**: \\( \\frac{x^{m-1}(1-x)^{n-1}}{B(m,n)} \\) on \\( [0, 1] \\)\n  - **Properties**: \\( E(X) = \\frac{m}{m+n} \\), \\( Var(X) = \\frac{mn}{(m+n)^2(m+n+1)} \\).\n- **Beta Type II**: \\( \\frac{x^{m-1}}{B(m,n)(1+x)^{m+n}} \\) on \\( [0, \\infty) \\)\n  - **Properties**: \\( E(X) = \\frac{m}{n-1} \\) (for \\( n>1 \\)).\n- **Lognormal**: \\( \\ln X \\sim N(\\mu, \\sigma^2) \\)\n  - **Properties**: \\( E(X) = e^{\\mu + \\sigma^2/2} \\), Median: \\( e^\\mu \\), Mode: \\( e^{\\mu - \\sigma^2} \\)."
                },
                {
                    "id": "generating-functions",
                    "label": "General Generating Functions",
                    "content": "### General Formulas\n- **MGF:** \\( M_X(t) = \\sum \\frac{\\mu'_r t^r}{r!} \\). \\( \\mu'_r = [\\frac{d^r}{dt^r} M_X(t)]_{t=0} \\).\n- **Cumulant GF:** \\( K_X(t) = \\ln M_X(t) = \\sum \\frac{\\kappa_r t^r}{r!} \\).\n  - \\( \\kappa_1 = \\mu'_1 \\), \\( \\kappa_2 = \\mu_2 \\), \\( \\kappa_3 = \\mu_3 \\), \\( \\kappa_4 = \\mu_4 - 3\\mu_2^2 \\).\n- **PGF:** \\( G_X(s) = E(s^X) \\). \\( P(X=k) = \\frac{1}{k!} G^{(k)}(0) \\).\n- **Characteristic Function (CF):** \\( \\phi_X(t) = E(e^{itX}) \\). CF of sum = Product of CFs."
                },
                {
                    "id": "descriptive-stats",
                    "label": "Statistical Methods: Descriptive",
                    "content": "### Summary Measures\n- **Location:** Mean, Median, Mode. Empirical: \\( \\text{Mode} \\approx 3\\text{Median} - 2\\text{Mean} \\).\n- **Dispersion:** SD, Variance, CV (\\( \\sigma/\\bar{x} \\times 100 \\)).\n- **Skewness:** \\( \\gamma_1 = \\mu_3 / \\sigma^3 \\). Positive if tail is to the right.\n- **Kurtosis:** \\( \\beta_2 = \\mu_4 / \\sigma^4 \\). Mesokurtic (\\( \\beta_2=3 \\)), Leptokurtic (\\( >3 \\)), Platykurtic (\\( <3 \\)).\n\n### Frequency Data\n- **Association:** Chi-square test for contingency tables. Yule's coefficient \\( Q = \\frac{ad-bc}{ad+bc} \\).\n- **Curve Fitting:** Method of Least Squares. Orthogonal polynomials used for polynomial regression."
                },
                {
                    "id": "correlation-regression",
                    "label": "Correlation & Regression",
                    "content": "### Bivariate Analysis\n- **Correlation (r):** \\( r = \\frac{Cov(X,Y)}{\\sigma_x \\sigma_y} \\). Invariant to change of scale/origin (except sign).\n- **Regression Lines:** Intersect at \\( (\\bar{x}, \\bar{y}) \\). Slope \\( b_{yx} = r \\frac{\\sigma_y}{\\sigma_x} \\).\n- **Multiple Correlation (R):** Measures linear relationship between one variable and a set of others. \\( 0 \\le R \\le 1 \\).\n- **Partial Correlation (r12.3):** Correlation between 1 and 2 after removing linear effect of 3.\n- **Intraclass Correlation:** Correlation between members of a cluster. Bounds: \\( -1/(k-1) \\le \\rho \\le 1 \\).\n- **Correlation Ratio (\\( \\eta \\)):** Measures general (non-linear) relationship. \\( \\eta^2 \\ge r^2 \\)."
                },
                {
                    "id": "sampling-dist",
                    "label": "Sampling Distributions & Tests",
                    "content": "### Sampling Distributions\n- **Chi-square (\\(\\chi^2\\)):** Sum of squares of \\( n \\) i.i.d. \\( N(0,1) \\). Mean \\( n \\), Var \\( 2n \\).\n- **t-distribution:** \\( t = Z / \\sqrt{\\chi^2/n} \\). Symmetric, heavier tails than Normal.\n- **F-distribution:** Ratio of two independent \\( \\chi^2/df \\). \\( F_{n,m} = 1/F_{m,n} \\).\n\n### Tests of Significance\n- **Large Sample:** Z-tests for means and proportions. Standard Error (SE) is critical.\n- **Small Sample:** t-tests for mean/difference, paired t-test. F-test for equality of variances.\n- **Sampling distribution of r:** \\( t = \\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}} \\sim t_{n-2} \\)."
                },
                {
                    "id": "non-parametric",
                    "label": "Non-parametric & Order Stats",
                    "content": "### Detailed Non-parametric Formulas\n- **Sign Test**: Under \\( H_0, S \\sim B(n, 0.5) \\).\n- **Median Test**: 2x2 contingency table using Chi-square/Fisher's exact.\n- **Run Test**: Total runs \\( R \\). Under \\( H_0 \\):\n  - \\( E(R) = \\frac{2n_1 n_2}{n_1+n_2} + 1 \\)\n  - \\( Var(R) = \\frac{2n_1 n_2(2n_1 n_2 - n_1 - n_2)}{(n_1+n_2)^2(n_1+n_2-1)} \\)\n- **Wilcoxon Signed Rank**: Sum of ranks \\( W \\).\n  - \\( E(W) = \\frac{n(n+1)}{4} \\)\n  - \\( Var(W) = \\frac{n(n+1)(2n+1)}{24} \\)\n- **Mann-Whitney U**: Sum of ranks \\( U \\).\n  - \\( E(U) = \\frac{n_1 n_2}{2} \\)\n  - \\( Var(U) = \\frac{n_1 n_2(n_1+n_2+1)}{12} \\)\n- **Wald-Wolfowitz**: Runs on ordered combined samples.\n- **Kolmogorov-Smirnov (K-S)**:\n  - **One-Sample**: \\( D_n = \\sup_x |F_n(x) - F_0(x)| \\).\n  - **Two-Sample**: \\( D_{m,n} = \\sup_x |F_m(x) - G_n(x)| \\)."
                }
            ],
            "tips": "ISS Paper I Focus: \n1. Memorize standard error (SE) formulas for all large sample tests. \n2. Relationships between \\( \\chi^2, t, \\) and \\( F \\) are high-yield. \n3. In non-parametric tests, know the 'Null Hypothesis' for each (e.g., Run test is for randomness). \n4. Remember: Partial correlation is ALWAYS between -1 and 1, but Multiple correlation is ALWAYS between 0 and 1. \n5. Jacobian is a must for transformation problems!"
        },
        "num": {
            "title": "Numerical Analysis",
            "sections": [
            ],
            "tips": ""
        },
        "comp": {
            "title": "Computer Section",
            "sections": [
            ],
            "tips": ""
        },
    },
    "paper2": {
        "linear": {
            "title": "Linear Models",
            "sections": [
            ],
            "tips": ""
        },
        "inference": {
            "title": "Statistical Inference",
            "sections": [
            ],
            "tips": ""
        },
        "official": {
            "title": "Official Statistics",
            "sections": [
            ],
            "tips": ""
        },
    }
};











