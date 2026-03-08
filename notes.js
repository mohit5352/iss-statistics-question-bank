/* notes.js — Comprehensive UPSC ISS Revision Notes */
const REVISION_NOTES = {
    "paper1": {
        "prob": {
            "title": "Probability & Statistical Methods",
            "sections": [
                {
                    "id": "foundations",
                    "label": "Probability Foundations",
                    "content": "### Axiomatic & Classical Definitions\n- **Axioms:** \\( P(A) \\ge 0 \\), \\( P(S) = 1 \\), and for disjoint \\( A_i \\), \\( P(\\cup A_i) = \\sum P(A_i) \\).\n- **Bayes' Theorem:** Used to update probabilities after new evidence.\n\\[ P(B_k|A) = \\frac{P(A|B_k)P(B_k)}{\\sum P(A|B_i)P(B_i)} \\]\n\n`Exam Note:` Posterior probability \\( P(K|C) \\) calculation is a frequent favorite. Remember the Law of Total Probability in the denominator.\n\n### Expectation & Moments\n- **Law of Total Expectation:** \\( E(X) = E[E(X|Y)] \\).\n- **Law of Total Variance:** \\( Var(X) = E[Var(X|Y)] + Var[E(X|Y)] \\).\n- **Properties:** \\( E(XY) = E(X)E(Y) \\) iff \\( X, Y \\) are uncorrelated (independence is a sufficient condition)."
                },
                {
                    "id": "discrete-dist",
                    "label": "Discrete Distributions",
                    "content": "### Standard Discrete Models\n- **Bernoulli(p):** Success/Failure. \\( E(X)=p, Var(X)=pq \\).\n- **Binomial(n,p):** Sum of \\( n \\) independent Bernoulli. \\( Mode = \\lfloor (n+1)p \\rfloor \\).\n- **Poisson(\\(\\lambda\\)):** Rare events. \\( Mean = Var = \\lambda \\). Sum of independent Poissons is Poisson.\n- **Geometric(p):** Number of trials to first success. Memoryless property: \\( P(X > s+t | X > s) = P(X > t) \\).\n- **Negative Binomial:** Number of trials to \\( r \\)-th success. Sum of i.i.d. Geometrics.\n- **Hypergeometric:** Sampling **without** replacement. Variance involves the finite population correction factor.\n- **Multinomial:** Extension of Binomial to more than two categories. \\( Cov(X_i, X_j) = -np_i p_j \\)."
                },
                {
                    "id": "continuous-dist",
                    "label": "Continuous Distributions",
                    "content": "### Standard Continuous Models\n- **Uniform(a,b):** \\( f(x) = 1/(b-a) \\). Mean \\( (a+b)/2 \\), Var \\( (b-a)^2/12 \\).\n- **Exponential(\\(\\theta\\)):** \\( f(x) = \\theta e^{-\\theta x} \\). Memoryless property. Sum of i.i.d. Exponentials is **Gamma/Erlang**.\n- **Normal(\\(\\mu, \\sigma^2\\)):** Symmetric. 68-95-99.7 rule. Any linear combination of independent Normals is Normal.\n- **Beta Distribution (Type I & II):**\n  - **Mode of Beta(I):** \\( \\frac{\\alpha-1}{\\alpha+\\beta-2} \\) (for \\( \\alpha, \\beta > 1 \\)).\n  - **Beta(II):** Support \\( [0, \\infty) \\). Transformation \\( Y = X/(1+X) \\) converts Type II to Type I.\n- **Gamma(\\(\\alpha, \\theta\\)):** Generalized sum of Exponentials. If \\( X, Y \\) are independent Gammas, \\( X/(X+Y) \\) is Beta(I).\n- **Cauchy:** \\( f(x) = \\frac{1}{\\pi(1+x^2)} \\). **Mean and Variance do not exist**. Ratio of two standard normals is Cauchy.\n- **Laplace (Double Exponential):** \\( f(x) = \\frac{1}{2} e^{-|x|} \\). Symmetric with sharp peak at zero. Difference of two i.i.d. Exponentials follows Laplace.\n- **Lognormal:** \\( \\ln X \\sim N(\\mu, \\sigma^2) \\). Positively skewed."
                },
                {
                    "id": "random-vectors",
                    "label": "Random Vectors & Bivariate Normal",
                    "content": "### Bivariate Normal (BVN)\n- **Parameters:** \\( \\mu_1, \\mu_2, \\sigma_1^2, \\sigma_2^2, \\rho \\).\n- **Conditionals:** \n  \\[ (Y|X=x) \\sim N\\left(\\mu_2 + \\rho\\frac{\\sigma_2}{\\sigma_1}(x-\\mu_1), \\sigma_2^2(1-\\rho^2)\\right) \\]\n- **Regression:** The conditional mean \\( E(Y|x) \\) is linear in \\( x \\). The conditional variance is constant (**Homoscedasticity**).\n- **Independence:** For BVN, \\( \\rho = 0 \\) implies independence (Not true for general distributions)."
                },
                {
                    "id": "generating-functions",
                    "label": "Generating Functions & Convergence",
                    "content": "### Generating Functions\n- **MGF:** \\( M_X(t) = E(e^{tX}) \\). \n- **Characteristic Function (CF):** \\( \\phi_X(t) = E(e^{itX}) \\). Always exists. Unique to the distribution.\n- **Uniqueness Theorem:** If \\( \\phi_X(t) = \\phi_Y(t) \\), then \\( X \\) and \\( Y \\) have the same distribution.\n\n### Modes of Convergence\n1. **Almost Sure (a.s.):** \\( P(\\lim X_n = X) = 1 \\).\n2. **In Probability:** \\( P(|X_n - X| > \\epsilon) \\to 0 \\). (Required for WLLN).\n3. **In Distribution (Weak):** \\( F_n(x) \\to F(x) \\). (Required for CLT).\n4. **In $r$-th Mean:** \\( E|X_n - X|^r \\to 0 \\).\n- **Hierarchy:** a.s. \\( \\implies \\) Prob \\( \\implies \\) Dist.\n\n### Limit Theorems\n- **WLLN:** Sample mean converges in probability to population mean if variance is finite.\n- **SLLN:** Sample mean converges almost surely to population mean if expectation is finite (Kolmogorov's SLLN).\n- **CLT:** Sum/Mean of i.i.d. variables converges to Normal distribution regardless of the original distribution shape."
                },
                {
                    "id": "inequalities",
                    "label": "Inequalities & Borel Laws",
                    "content": "### Probability Inequalities\n- **Chebyshev's:** \\( P(|X - \\mu| \\ge k\\sigma) \\le 1/k^2 \\). Extremely useful for large sample bounds.\n- **Markov's:** \\( P(X \\ge a) \\le E(X)/a \\) (for non-negative RVs).\n- **Kolmogorov's Inequality:** Bound for the maximum of partial sums.\n\n### Borel 0-1 Laws\n- **First Borel-Cantelli:** If \\( \\sum P(A_n) < \\infty \\), then \\( P(A_n \\text{ i.o.}) = 0 \\).\n- **Second Borel-Cantelli:** If \\( \\sum P(A_n) = \\infty \\) and events are independent, then \\( P(A_n \\text{ i.o.}) = 1 \\)."
                }
            ],
            "tips": "For ISS Paper I: \n1. Memorize the regression coefficient relation \\( b_{yx} = \\rho \\sigma_y / \\sigma_x \\). \n2. Always check the support of the distribution when calculating probabilities from PDF. \n3. Cauchy distribution is a 'trap' — mean and variance don't exist! \n4. In transformation of variables, don't forget the **Jacobian**."
        },
        "num": { "title": "Numerical Analysis", "sections": [], "tips": "" },
        "comp": { "title": "Computer Section", "sections": [], "tips": "" }
    },
    "paper2": {
        "linear": { "title": "Linear Models", "sections": [], "tips": "" },
        "inference": { "title": "Statistical Inference", "sections": [], "tips": "" },
        "official": { "title": "Official Statistics", "sections": [], "tips": "" }
    }
};
